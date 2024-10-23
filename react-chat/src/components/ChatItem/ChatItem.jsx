import React, { useContext, useRef, useEffect } from "react";
import avatar from "../../assets/img/avatar.jpg";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import { PageContext } from "../../utils/PageContext";
import "./ChatItem.scss";

const ChatItem = ({ chat }) => {
	const { switchPage } = useContext(PageContext);

    const chatItemRef = useRef(null);

    useEffect(() => {
        if (chat.new) {
            const newChatElement = chatItemRef.current;
            if (newChatElement) {
                newChatElement.classList.add('chat-item-animation');

                setTimeout(() => {
                    newChatElement.classList.add('appear');
                }, 50);
            }
        }
    }, [chat.new]);

	return (
		<div
            onClick={switchPage}
            ref={chatItemRef}
            className="chat-item"
        >
			<div className="avatar-conteiner">
				<img className="avatar" src={avatar} alt="avatar" />
			</div>
			<div className="chat-message">
				<span className="chat-name">{chat.name}</span>
				<p>{chat.message}</p>
			</div>
			<div className="chat-details">
				<span className="chat-time">{chat.time}</span>
				{chat.unread ? (						
					<span className={chat.tag ? "taged-unread-count" : "unread-count"}>
                        {chat.tag && <AlternateEmailOutlinedIcon style={{fontSize: "17px"}} />}
                        {chat.unread}
					</span>
				) : chat.read ? (
					<DoneAllOutlinedIcon className="material-symbols-outlined chat-symbol" />
				) : (
					<CheckOutlinedIcon className="material-symbols-outlined chat-symbol" />
				)}
			</div>
		</div>
	);
};

export default ChatItem;
