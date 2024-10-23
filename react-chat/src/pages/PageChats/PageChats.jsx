import { useState, useContext } from "react";
import ChatsHeader from "../../components/ChatsHeader";
import ChatsList from "../../components/ChatsList";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./PageChats.scss";
import avatar from '../../assets/img/avatar.jpg';
import { PageContext } from "../../utils/PageContext";

const PageChats = () => {

    const { currentPage } = useContext(PageContext);

    const [chats, setChats] = useState(currentPage.data.chats);

    const addNewChat = () => {
        const newChat = {
            new: true,
            avatar: avatar,
            name: "Новый чат",
            message: "Это новый чат!",
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            unread: null,
            tag: false,
            read: false,
        };
        setChats([newChat, ...chats])
    }
    
	return (
		<div className="chat-container">
			<ChatsHeader />
			<ChatsList chats={chats} />

			<EditOutlinedIcon
                onClick={addNewChat}
				style={{ fontSize: "35px" }}
				className="floating-btn material-symbols-outlined"
			/>
		</div>
	);
};

export default PageChats;
