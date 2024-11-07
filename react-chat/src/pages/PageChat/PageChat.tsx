import { useState, useEffect, useContext, FormEvent } from 'react';
import ChatHeader from '../../modules/chat/ChatHeader';
import ChatBody from '../../modules/message/MessagesList';
import ChatFooter from '../../modules/chat/ChatFooter';
import './PageChat.scss';
import { PageContext } from '../../context/PageContext';
import { useParams } from 'react-router-dom';
import ChatLayout from '../../layouts/ChatLayout';
import { ChatService, MessagesService, OpenAPI, Message, MessageCreate, MessageService, CentrifugoService} from '../../api';
import { parseTime } from '../../utils/functions';
import { Centrifuge, Subscription } from 'centrifuge';

const PageChat = () => {
  // const { data } = useContext(PageContext);
  const { chatId } = useParams(); 

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatTitle, setChatTitle] = useState<string>();
  const [centrifuge, setCentrifuge] = useState<Centrifuge | null>(null);

  const  connect  =  async ()  => {
    const tokenCreate = (await CentrifugoService.centrifugoConnectCreate()).token;
    const  centrifuge  =  new  Centrifuge('ws://localhost:8080/connection/websocket/', {
      token: tokenCreate
    });

    const tokenSubscription = (await CentrifugoService.centrifugoSubscribeCreate()).token
    const  subscription  = centrifuge.newSubscription(localStorage.getItem('userId') || '', {
      token: tokenSubscription
    });
  
    subscription.on('publication', (ctx) => {
      const newMessage: Message = ctx.data.message;
      MessageService.messageRead(newMessage.id || '')
      .then((resp) => {
        setMessages((prevMessages) => {
          if (!prevMessages.find((mess) => mess.id === resp.id)) {
            return [...prevMessages, resp];
          }
          return prevMessages;
        })
      })
      .catch(() => console.log('Faild fetch message'));
    });
  
    subscription.subscribe();
    centrifuge.connect();
    setCentrifuge(centrifuge);
  }

  useEffect(() => {
    connect();
    return () => {
      if(centrifuge)
        centrifuge?.disconnect();
    };
  }, [chatId]);

  useEffect(() => {
    if (!chatId) return;
    ChatService.chatRead(chatId)
      .then(fetchedChat => setChatTitle(fetchedChat.title))
      .catch(error => console.error("Failed to fetch chat title:", error));

    MessagesService.messagesList(chatId)
      .then(response => {
        setMessages(response.results.reverse());
      })
      .catch(error => console.error("Failed to fetch messages:", error));
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
      console.error("Faild send message:", error);
    }
  };

  return (
    <ChatLayout>
      <ChatHeader title={chatTitle || ''} />
      <ChatBody messages={messages} />
      <ChatFooter
        messageInput={messageInput}
        handleSubmit={handleSubmit}
        setMessageInput={setMessageInput}
      />
    </ChatLayout>
  );
};

export default PageChat;
