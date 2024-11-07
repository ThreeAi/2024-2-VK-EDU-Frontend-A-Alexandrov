import { useState, /* useContext, */ useEffect } from "react";
import ChatsHeader from "../../modules/chat/ChatsHeader";
import ChatsList from "../../modules/chat/ChatsList";
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import "./PageChats.scss";
// import avatar from '../../assets/img/avatar.jpg';
// import { PageContext } from '../../context/PageContext';
import ChatLayout from "../../layouts/ChatLayout";
// import { useNavigate } from "react-router-dom";
// import { AppRoute } from "../../utils/const";
import { ChatsService, Chat } from "../../api";
import Spinner from "../../components/Spinner";
// import { parseTime } from '../../utils/functions';

const PageChats = () => {
	// const { data } = useContext(PageContext);

	const [chats, setChats] = useState<Chat[]>([]);
	const [isChatsLoading, setIsChatsLoading] = useState<boolean>(false);

	// const navigate = useNavigate();

	// useEffect(() => {
	// 	const accessToken = localStorage.getItem("accessToken");
	// 	if (accessToken) {
	// 		navigate(AppRoute.Chats);
	// 	} else {
	// 		navigate(AppRoute.Login);
	// 	}
	// }, [navigate]);

	useEffect(() => {
    setIsChatsLoading(true);
		ChatsService.chatsList()
			.then((response) => setChats(response.results))
			.catch((err) => console.error("Error loading chats:", err))
      .finally(() => setIsChatsLoading(false));
	}, []);

	// const addNewChat = () => {
	//   const newChat = {
	//     id: `${chats.length + 1}`,
	//     new: true,
	//     avatar: avatar,
	//     name: 'Новый чат',
	//     message: 'Это новый чат!',
	//     time: new Date().toLocaleTimeString([], {
	//       hour: '2-digit',
	//       minute: '2-digit',
	//     }),
	//     unread: null,
	//     tag: false,
	//     read: false,
	//   };
	//   setChats([newChat, ...chats])
	// }

	return (
		<ChatLayout>
			<ChatsHeader />
			{isChatsLoading ? <Spinner /> : chats && <ChatsList chats={chats} />}

			{/* <EditOutlinedIcon
        onClick={addNewChat}
        style={{ fontSize: '35px' }}
        className="floating-btn material-symbols-outlined"
      /> */}
		</ChatLayout>
	);
};

export default PageChats;
