import { useState, useEffect, useContext, FormEvent } from "react";
import ChatHeader from "../../modules/chat/ChatHeader";
import ChatBody from "../../modules/message/MessagesList";
import ChatFooter from "../../modules/chat/ChatFooter";
import "./PageChat.scss";
import { PageContext } from "../../context/PageContext";
import { ChatMessages, Message } from "../../utils/const";
import { useParams } from "react-router-dom";
import ChatLayout from "../../layouts/ChatLayout";

const PageChat = () => {
	const { data } = useContext(PageContext);
	const { chatId } = useParams(); 

	const [messageInput, setMessageInput] = useState("");
	const [messages, setMessages] = useState(Array<Message>);
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const savedChats : ChatMessages[] =
			JSON.parse(localStorage.getItem("chatMessages") || "[]") || [];
		
		const currentChat = savedChats.find(chat => chat.id === parseInt(chatId || "0"));
		
		if (currentChat) {
			setMessages(currentChat.messages);
		} else {
			const initialMessages = data.chat.data.find(chat => chat.chatId === parseInt(chatId || "0"))?.messages || [];
			setMessages(initialMessages);
		}
		setIsInitialized(true);
	}, [data.chat.data, chatId]);

	useEffect(() => {
		if (isInitialized) {
			const savedChats : ChatMessages[] =
				JSON.parse(localStorage.getItem("chatMessages") || "[]") || [];
			const currentChatIndex = savedChats.findIndex(chat => chat.id === parseInt(chatId || "0"));

			if (currentChatIndex > -1) {
				savedChats[currentChatIndex].messages = messages;
			} else {
				savedChats.push({ id: parseInt(chatId || "0"), messages });
			}

			localStorage.setItem("chatMessages", JSON.stringify(savedChats));
		}
	}, [chatId, messages, isInitialized]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
		const textarea = event.currentTarget.querySelector("textarea");
		if (textarea) {
			textarea.rows = 1; 
		}
	};

	return (
		<ChatLayout>
			<ChatHeader />
			<ChatBody messages={messages} />
			<ChatFooter
				messageInput={messageInput}
				handleSubmit={handleSubmit}
				setMessageInput={setMessageInput}
			/>
		</ChatLayout>
	);
};

export default PageChat;
