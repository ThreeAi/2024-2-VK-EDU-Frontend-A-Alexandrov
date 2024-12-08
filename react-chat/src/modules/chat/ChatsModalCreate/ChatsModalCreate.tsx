import { useEffect, useRef, useState } from 'react';
import Modal from '../../../components/Modal';
import './ChatsModalCreat.scss';
import { ChatsService, User, UsersService } from '../../../api';
import { ChatCreate } from '../../../api/models/ChatCreate';
import InputField from '../../../components/InputField';
import Spinner from '../../../components/Spinner';
import { useAppDispatch } from '../../../hooks';
import { fetchChatsAction } from '../../../store/chatsProcess/chatsActions';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const ChatsModalCreate = ({ isOpen, onClose }: ModalProps) => {
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filterTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (filterTimeout.current) {
        clearTimeout(filterTimeout.current);
        filterTimeout.current = null; 
      }
    };
  }, []);

  const fetchUsers = async (search: string) => {
    if (filterTimeout.current) {
      clearTimeout(filterTimeout.current);
    }

    filterTimeout.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await UsersService.usersList(search, 1, 10);
        setUsers(response.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    fetchUsers(value);
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  const handleCreateChat = async () => {
    if (!selectedUser) {
      alert('Выберите пользователя для создания чата.');
      return;
    }

    const chatData: ChatCreate = {
      members: [selectedUser.id!],
      is_private: true,
    };

    try {
      await ChatsService.chatsCreate(chatData);
      alert('Чат успешно создан!');
      dispatch(fetchChatsAction());
      onClose();
    } catch (error) {
      console.error('Error creating chat:', error);
      alert('Не удалось создать чат.');
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchUsers('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <h3>Создать новый чат</h3>
      <InputField
        label={'Поиск пользователей'}
        name={'name'}
        value={searchTerm}
        description={undefined}
        onChange={handleSearchChange}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserSelect(user)}
              className="user-list-item"
              style={{
                backgroundColor:
                                    selectedUser?.id === user.id
                                      ? '#f0f8ff'
                                      : 'white',
              }}
            >
              {user.username} ({user.first_name} {user.last_name})
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleCreateChat}
        disabled={!selectedUser}
        className="create-chat_submit-button"
        style={{
          backgroundColor: selectedUser ? '#007bff' : '#ccc',
          cursor: selectedUser ? 'pointer' : 'not-allowed',
        }}
      >
                Создать чат
      </button>
    </Modal>
  );
};

export default ChatsModalCreate;
