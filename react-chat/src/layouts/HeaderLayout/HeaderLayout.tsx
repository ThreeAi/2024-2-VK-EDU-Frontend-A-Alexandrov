import { ReactNode } from 'react';
import './HeaderLayout.scss';

type HeaderLayoutProps = {
    children: ReactNode; 
}

const HeaderLayout = ({children} : HeaderLayoutProps) => {
  return (
    <div className="chats-header">
      <div className="chat-header-content">
        {children}
      </div>
    </div>
  );
};

export default HeaderLayout;