import {useRef, useEffect} from 'react';
import './MessagesList.scss';
import MessageItem from '../MessageItem';
import { Message } from '../../../api';

type ChatBodyProps = {
	messages: Message[]
}

const ChatBody = ({ messages } : ChatBodyProps) => {

  const chatBodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map(message => (
          <MessageItem key={message.id} message={message} />
        ))}
      </div>
    </>
  );
};

export default ChatBody;
