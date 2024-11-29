import { useState, useEffect } from 'react';
import ChatsHeader from '../../modules/chat/ChatsHeader';
import ChatsList from '../../modules/chat/ChatsList';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './PageChats.scss';
import ChatLayout from '../../layouts/ChatLayout';
import Spinner from '../../components/Spinner';
import ChatsModalCreate from '../../modules/chat/ChatsModalCreate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchChatsAction } from '../../store/chatsProcess/chatsActions';
import { getChats, getIsChatsDataLoading } from '../../store/chatsProcess/selectors';

const PageChats = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const chats = useAppSelector(getChats);
  const isChatsLoading = useAppSelector(getIsChatsDataLoading);

  const dispatch = useAppDispatch();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    dispatch(fetchChatsAction());
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
      <ChatsModalCreate isOpen={isModalOpen} onClose={closeModal}/>
    </ChatLayout>
  );
};

export default PageChats;
