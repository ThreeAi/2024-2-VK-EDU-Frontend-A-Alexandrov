import { Chat } from "../../../utils/const";
import ChatItem from "../ChatItem";
import './ChatsList.scss';

type ChatsListProps = {
	chats: Chat[];
}

const ChatsList = ({ chats }: ChatsListProps) => {
    const len = chats.length;
	return (
		<div className="chat-list">
			{chats.map((chat, index) => (
				<ChatItem key={len - index} chat={chat} />
			))}
		</div>
	);
};

export default ChatsList;