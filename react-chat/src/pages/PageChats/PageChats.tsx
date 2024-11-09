import { useState, useEffect } from 'react';
import ChatsHeader from '../../modules/chat/ChatsHeader';
import ChatsList from '../../modules/chat/ChatsList';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './PageChats.scss';
import ChatLayout from '../../layouts/ChatLayout';
import { ChatsService, Chat } from '../../api';
import Spinner from '../../components/Spinner';
import ChatsModalCraete from '../../modules/chat/ChatsModalCreate';

const PageChats = () => {

  const [chats, setChats] = useState<Chat[]>([]);
  const [isChatsLoading, setIsChatsLoading] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    setIsChatsLoading(true);
    ChatsService.chatsList()
      .then((response) => setChats(response.results))
      .catch((err) => console.error('Error loading chats:', err))
      .finally(() => setIsChatsLoading(false));
  }, []);

  return (
    <ChatLayout>
      <ChatsHeader />
      {isChatsLoading ? <Spinner /> : chats && <ChatsList chats={chats} />}

      <EditOutlinedIcon
        onClick={openModal}
        style={{ fontSize: '35px' }}
        className="floating-btn material-symbols-outlined"
      /> 
      <ChatsModalCraete isOpen={isModalOpen} onClose={closeModal}/>
    </ChatLayout>
  );
};

export default PageChats;
