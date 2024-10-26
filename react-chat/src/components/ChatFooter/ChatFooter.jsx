import React, { useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './ChatFooter.scss';

const ChatFooter = ({ messageInput, handleSubmit, setMessageInput }) => {

    const handleKeyPress = (event) => {
		if (event.keyCode === 13) { 
			if (!event.shiftKey) {
				event.preventDefault();
				handleSubmit(event); 
            }
		}
	};

    const handleInputChange = (event) => {
		const textarea = event.target;
		const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
		const maxRows = 5;

		textarea.rows = 1; 
		const currentRows = Math.floor(textarea.scrollHeight / lineHeight); 

		if (currentRows < maxRows) {
			textarea.rows = currentRows; 
		} else {
			textarea.rows = maxRows;
			textarea.style.overflowY = 'auto';
		}

		setMessageInput(event.target.value);
	};

	return (
		<div className="chat-footer">
			<form className="form" onSubmit={handleSubmit} action="/">
				<textarea
					rows="1"
					wrap="soft"
					className="message-input"
					placeholder="Сообщение"
					value={messageInput}
					onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
				></textarea>
			</form>
			<AttachmentIcon className="material-symbols-outlined"/>
		</div>
	);
};

export default ChatFooter;
