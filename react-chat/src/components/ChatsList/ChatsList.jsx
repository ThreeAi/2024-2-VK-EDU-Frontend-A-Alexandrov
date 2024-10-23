import ChatItem from "../ChatItem";
import './ChatsList.scss';

const ChatsList = ({ chats }) => {
    let len = chats.length;
	return (
		<div className="chat-list">
			{chats.map((chat, index) => (
				<ChatItem key={len - index} chat={chat} />
			))}
		</div>
	);
};

export default ChatsList;