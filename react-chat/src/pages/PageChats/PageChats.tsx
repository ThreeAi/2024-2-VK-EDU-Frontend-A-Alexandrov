import { useState, useContext } from 'react';
import ChatsHeader from '../../modules/chat/ChatsHeader';
import ChatsList from '../../modules/chat/ChatsList';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './PageChats.scss';
import avatar from '../../assets/img/avatar.jpg';
import { PageContext } from '../../context/PageContext';
import ChatLayout from '../../layouts/ChatLayout';

const PageChats = () => {

  const { data } = useContext(PageContext);

  const [chats, setChats] = useState(data.listChats.data.chats);

  const addNewChat = () => {
    const newChat = {
      id: 0,
      new: true,
      avatar: avatar,
      name: 'Новый чат',
      message: 'Это новый чат!',
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      unread: null,
      tag: false,
      read: false,
    };
    setChats([newChat, ...chats])
  }
    
  return (
    <ChatLayout>
      <ChatsHeader />

      <ChatsList chats={chats} />

      <EditOutlinedIcon
        onClick={addNewChat}
        style={{ fontSize: '35px' }}
        className="floating-btn material-symbols-outlined"
      />
    </ChatLayout>
  );
};

export default PageChats;
