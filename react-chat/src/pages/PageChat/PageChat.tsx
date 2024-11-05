import { useState, useEffect, useContext, FormEvent } from 'react';
import ChatHeader from '../../modules/chat/ChatHeader';
import ChatBody from '../../modules/message/MessagesList';
import ChatFooter from '../../modules/chat/ChatFooter';
import './PageChat.scss';
import { PageContext } from '../../context/PageContext';
import { useParams } from 'react-router-dom';
import ChatLayout from '../../layouts/ChatLayout';
import { ChatService, MessagesService, OpenAPI, Message, MessageCreate, MessageService} from '../../api';
import { parseTime } from '../../utils/functions';
import { Centrifuge, Subscription } from 'centrifuge';

const PageChat = () => {
  // const { data } = useContext(PageContext);
  const { chatId } = useParams(); 

  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatTitle, setChatTitle] = useState<string>();
  // const [isInitialized, setIsInitialized] = useState(false);
  // const [centrifuge, setCentrifuge] = useState<Centrifuge | null>(null);
  // const [subscription, setSubscription] = useState<Subscription | null>(null);

  // const  connect  =  ()  => {
  //   const  centrifuge  =  new  Centrifuge('ws://localhost:8080/api/connection/websocket/', {
  //     getToken: (ctx)  =>
  //     new  Promise((resolve, reject)  =>
  //     fetch('http://localhost:8080/api/centrifugo/connect/', {
  //     body: JSON.stringify(ctx),
  //     method: 'POST',
  //     headers: { 'Authorization': `Bearer ${OpenAPI.TOKEN}` }
  //   })
  //     .then((res)  => res.json())
  //     .then((data)  =>  resolve(data.token))
  //     .catch((err)  =>  reject(err))
  //     )
  //   });

  //   const  subscription  = centrifuge.newSubscription(localStorage.getItem('userId') || '', {
  //     getToken: (ctx)  =>
  //     new  Promise((resolve, reject)  =>
  //     fetch('http://localhost:8080/api/centrifugo/subscribe/', {
  //     body: JSON.stringify(ctx),
  //     method: 'POST',
  //     headers: { 'Authorization': `Bearer ${OpenAPI.TOKEN}` },
  //   })
  //     .then((res)  => res.json())
  //     .then((data)  =>  resolve(data.token))
  //     .catch((err)  =>  reject(err))
  //     )
  //   });
  
  //   subscription.on('publication', function(ctx) {
  //     console.log(ctx.data);
  //     const { event, message } = ctx.data;
  //     handleServerEvent(event, message);
  //   });
  
  //   subscription.subscribe();
  //   centrifuge.connect();
  //   setCentrifuge(centrifuge);
  //   setSubscription(subscription);
  // }

  // const handleServerEvent = (event: string, message: MessageApi) => {
  //   switch (event) {
  //     case 'create':
  //       setMessages((prevMessages) => [...prevMessages, transformMessage(message)]);
  //       break;
  //     default:
  //       console.warn(`Unknown event type: ${event}`);
  //   }
  // };

  // const transformMessage = (message: MessageApi) => ({
  //   id: message.id,
  //   sended: message.sender.id === localStorage.getItem('userId'),
  //   text: message.text || '',
  //   time: parseTime(message.updated_at || '') || '',
  // });

  // useEffect(() => {
  //   connect();
  // }, []);

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
  
      const createdMessage = await MessagesService.messagesCreate(messageToSend);
  
      const fullMessage = await MessageService.messageRead(createdMessage.id || '');
  
      setMessages((prevMessages) => [...prevMessages, fullMessage]);
  
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
