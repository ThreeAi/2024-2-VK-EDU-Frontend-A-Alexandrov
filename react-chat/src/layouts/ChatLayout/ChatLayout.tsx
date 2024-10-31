import { ReactNode } from 'react';
import './ChatLayout.scss';

type ChatLayoutProps = {
	children: ReactNode;
};

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return <div className="chat-container">
    {children}
  </div>;
};

export default ChatLayout;
