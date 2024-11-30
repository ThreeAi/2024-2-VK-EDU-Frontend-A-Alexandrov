import { useState, useEffect, FormEvent, useContext } from 'react';
import ChatHeader from '../../modules/chat/ChatHeader';
import ChatBody from '../../modules/message/MessagesList';
import ChatFooter from '../../modules/chat/ChatFooter';
import './PageChat.scss';
import { useParams } from 'react-router-dom';
import ChatLayout from '../../layouts/ChatLayout';
import { MessagesService, MessageCreate} from '../../api';
import Spinner from '../../components/Spinner';
import { MessageInput } from '../../types/MessageInput';
import { MessageInputContext } from '../../contexts/MessageInputContext';
import { CentrifugeContext } from '../../contexts/CentrifugoContext';
import { blobToFile } from '../../utils/functions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getChat, getIsMessagesDataLoading, getMessages } from '../../store/chatProcess/selectors';
import { addNewMessageAction, fetchMessagesAction, fethcChatAction } from '../../store/chatProcess/chatActions';

const PageChat = () => {
  const { chatId } = useParams(); 

  const { newMessage, setNewMessage} = useContext(CentrifugeContext);

  const [messageInput, setMessageInput] = useState<MessageInput>({text: '', files: []});
  const [isDragging, setIsDragging] = useState(false);

  const dispatch = useAppDispatch();
  const chat = useAppSelector(getChat);
  const messages = useAppSelector(getMessages);
  const isMessagesLoading = useAppSelector(getIsMessagesDataLoading);

  useEffect(() => {
    if (newMessage)
      dispatch(addNewMessageAction(newMessage))
    if (setNewMessage)
      setNewMessage(null);
  }, [chatId, newMessage]);

  useEffect(() => {
    if (!chatId) return;
    dispatch(fethcChatAction(chatId));
    dispatch(fetchMessagesAction(chatId))
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
      <ChatHeader avatar={chat.avatar} title={chat.title || ''} />
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
