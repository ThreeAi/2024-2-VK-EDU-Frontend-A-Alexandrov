import './ChatsHeader.scss';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const ChatsHeader = () => {
	return (
		<div className="chats-header">
			<div className="chat-header-content">
				<MenuIcon className="material-symbols-outlined" />
				<h3 className="chats-title">Messenger</h3>
				<SearchIcon className="material-symbols-outlined" />
			</div>
		</div>
	);
};

export default ChatsHeader;