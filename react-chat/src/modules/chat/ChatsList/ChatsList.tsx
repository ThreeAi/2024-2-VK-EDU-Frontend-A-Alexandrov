import { Chat } from '../../../api';
import ChatItem from '../ChatItem';
import './ChatsList.scss';

type ChatsListProps = {
	chats: Chat[];
}

const ChatsList = ({ chats }: ChatsListProps) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatsList;