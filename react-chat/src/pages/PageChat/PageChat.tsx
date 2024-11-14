import { useState, useEffect, FormEvent, useContext } from 'react';
import ChatHeader from '../../modules/chat/ChatHeader';
import ChatBody from '../../modules/message/MessagesList';
import ChatFooter from '../../modules/chat/ChatFooter';
import './PageChat.scss';
import { useParams } from 'react-router-dom';
import ChatLayout from '../../layouts/ChatLayout';
import { ChatService, MessagesService, Message, MessageCreate} from '../../api';
import Spinner from '../../components/Spinner';
import { MessageInput } from '../../types/MessageInput';
import { MessageInputContext } from '../../contexts/MessageInputContext';
import { CentrifugeContext } from '../../contexts/CentrifugoContext';

const PageChat = () => {
  const { chatId } = useParams(); 

  const { newMessage } = useContext(CentrifugeContext);

  const [messageInput, setMessageInput] = useState<MessageInput>({text: '', files: []});
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [chatTitle, setChatTitle] = useState<string>();

  useEffect(() => {
    setMessages((prevMessages) => {
      if (newMessage && newMessage.chat == chatId && !prevMessages.find((mess) => mess.id === newMessage.id)) {
        return [...prevMessages, newMessage];
      }
      return prevMessages;
    })
  }, [chatId, newMessage]);

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
    if (!messageInput.text || messageInput.text.trim() === '') return;

    try {
      const messageToSend: MessageCreate = {
        text: messageInput.text.trim(),
        chat: chatId || '', 
      };
  
      await MessagesService.messagesCreate(messageToSend);
  
      setMessageInput({text: '', files: [],});
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
      <MessageInputContext.Provider value={{ messageInput, setMessageInput}}>
        <ChatFooter
          handleSubmit={handleSubmit}
        />
      </MessageInputContext.Provider>
    </ChatLayout>
  );
};

export default PageChat;
