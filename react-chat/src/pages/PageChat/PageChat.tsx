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
import { blobToFile, notifyMe } from '../../utils/functions';

const PageChat = () => {
  const { chatId } = useParams(); 

  const { newMessage, setNewMessage } = useContext(CentrifugeContext);

  const [messageInput, setMessageInput] = useState<MessageInput>({text: '', files: []});
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessagesLoading, setIsMessagesLoading] = useState<boolean>(false);
  const [chatTitle, setChatTitle] = useState<string>();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setMessages((prevMessages) => {
      if (newMessage && newMessage.chat == chatId && !prevMessages.find((mess) => mess.id === newMessage.id)) {
        return [...prevMessages, newMessage];
      }
      else if (newMessage && newMessage.chat != chatId) {
        notifyMe({title: newMessage?.sender.first_name || 'user', message: newMessage?.text || 'files'})
      }
      setNewMessage?.(null);
      return prevMessages;
    })
    return () => setNewMessage?.(null);
  }, [chatId, newMessage, setNewMessage]);

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

  const handleFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);

    const imageFiles = files.filter((file) => file.type.startsWith('image/'));

    setMessageInput((prevInput) => ({
      ...prevInput,
      files: [...prevInput.files, ...imageFiles],
    }));
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ((!messageInput.text || messageInput.text.trim() === '') && messageInput.files.length === 0 && !messageInput.voice) return;

    try {
      const messageToSend: MessageCreate = !messageInput.voice ? {
        text: messageInput.text ? messageInput.text.trim() : undefined,
        chat: chatId || '', 
        files: messageInput.files.length === 0 ? undefined : (messageInput.files as File[]),
      } : 
        {
          voice: blobToFile(messageInput.voice as Blob, 'voice-message.ogg'),
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
      <div className={`droparea ${isDragging ? 'dragover' : ''}`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {isMessagesLoading ? <Spinner/> : <ChatBody messages={messages} />}
        <MessageInputContext.Provider value={{ messageInput, setMessageInput}}>
          <ChatFooter
            handleSubmit={handleSubmit}
          />
        </MessageInputContext.Provider>
      </div>
    </ChatLayout>
  );
};

export default PageChat;
