import { useState, useEffect, useContext } from "react";
import ChatHeader from "../../components/ChatHeader";
import ChatBody from "../../components/ChatBody";
import ChatFooter from "../../components/ChatFooter";
import "./PageChat.scss";
import { PageContext } from "../../utils/PageContext";

const PageChat = () => {
	const { currentPage } = useContext(PageContext);

	const [messageInput, setMessageInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
		if (savedMessages.length > 0) {
			setMessages(savedMessages);
		}
		else {
			setMessages(currentPage.data.messages)
		}
		setIsInitialized(true);
	}, []);

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem('chatMessages', JSON.stringify(messages));
		}
	}, [messages, isInitialized]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (messageInput.trim() === "") return;

		const newMessage = {
			sended: true,
			text: messageInput.trim(),
			time: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prevMessages) => [...prevMessages, newMessage]);
		setMessageInput("");
		event.target.rows = 1;
	};

	return (
		<div className="chat-container">
			<ChatHeader />
			<ChatBody messages={messages} />
			<ChatFooter
				messageInput={messageInput}
				handleSubmit={handleSubmit}
				setMessageInput={setMessageInput}
			/>
		</div>
	);
};

export default PageChat;
