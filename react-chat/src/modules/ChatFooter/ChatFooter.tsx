import React, { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './ChatFooter.scss';

interface ChatFooterProps {
    messageInput: string;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    setMessageInput: (value: string) => void;
}

const ChatFooter = ({ messageInput, handleSubmit, setMessageInput } : ChatFooterProps) => {

    const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.keyCode === 13 && !event.shiftKey) { 
            event.preventDefault();
            handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight || '0', 10);
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
                    rows={1}
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
