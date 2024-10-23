import React, {useRef, useEffect} from "react";
import "./ChatBody.scss";
import Message from "../Message";

const ChatBody = ({ messages }) => {

	const chatBodyRef = useRef(null);

	useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

	return (
		<div className="chat-body" ref={chatBodyRef}>
			{messages.map((message, index) => (
				<Message key={index} message={message} />
			))}
		</div>
	);
};

export default ChatBody;
