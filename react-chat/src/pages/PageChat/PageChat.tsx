import { useState, useEffect, FormEvent } from 'react';
import ChatHeader from '../../modules/chat/ChatHeader';
import ChatBody from '../../modules/message/MessagesList';
import ChatFooter from '../../modules/chat/ChatFooter';
import './PageChat.scss';
import { useParams } from 'react-router-dom';
import ChatLayout from '../../layouts/ChatLayout';
import { ChatService, MessagesService, Message, MessageCreate, CentrifugoService} from '../../api';
import { Centrifuge, Subscription } from 'centrifuge';
import Spinner from '../../components/Spinner';
const wsUrl = import.meta.env.VITE_WS_URL || '';

const PageChat = () => {
  const { chatId } = useParams(); 

  const wspath = wsUrl;

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [chatTitle, setChatTitle] = useState<string>();
  const [centrifuge, setCentrifuge] = useState<Centrifuge | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const connect = async () => {
    const tokenCreate = (await CentrifugoService.centrifugoConnectCreate()).token;
    const centrifuge = new Centrifuge(wspath, {
      token: tokenCreate
    });

    const tokenSubscription = (await CentrifugoService.centrifugoSubscribeCreate()).token
    const subscription = centrifuge.newSubscription(localStorage.getItem('userId') || '', {
      token: tokenSubscription
    });
  
    subscription.on('publication', (ctx) => {
      const newMessage: Message = ctx.data.message;
      setMessages((prevMessages) => {
        if (!prevMessages.find((mess) => mess.id === newMessage.id)) {
          return [...prevMessages, newMessage];
        }
        return prevMessages;
      })
    });
  
    subscription.subscribe();
    centrifuge.connect();
    setSubscription(subscription);
    setCentrifuge(centrifuge);
  }

  useEffect(() => {
    connect();
    return () => {
      if (centrifuge)
        centrifuge.disconnect();
      if (subscription) {
        subscription.removeAllListeners();
        subscription.unsubscribe();
      }
    };
  }, [chatId]);

  useEffect(() => {
    if (!chatId) return;
    ChatService.chatRead(chatId)
      .then(fetchedChat => setChatTitle(fetchedChat.title))
      .catch(error => console.error('Failed to fetch chat title:', error));

    setIsMessagesLoading(true);
    MessagesService.messagesList(chatId)
      .then(response => setMessages(response.results.reverse()))
      .catch(error => console.error('Failed to fetch messages:', error))
      .finally(() => setIsMessagesLoading(false));

  }, [chatId]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageInput.trim() === '') return;

    try {
      const messageToSend: MessageCreate = {
        text: messageInput.trim(),
        chat: chatId || '', 
      };
  
      await MessagesService.messagesCreate(messageToSend);
  
      setMessageInput('');
      const form = event.target as HTMLFormElement;
      const textarea = form.querySelector('textarea');
      if (textarea) {
        textarea.rows = 1;
      }
    } catch (error) {
      console.error('Faild send message:', error);
    }
  };

  return (
    <ChatLayout>
      <ChatHeader title={chatTitle || ''} />
      {isMessagesLoading ? <Spinner/> : <ChatBody messages={messages} />}
      <ChatFooter
        messageInput={messageInput}
        handleSubmit={handleSubmit}
        setMessageInput={setMessageInput}
      />
    </ChatLayout>
  );
};

export default PageChat;
