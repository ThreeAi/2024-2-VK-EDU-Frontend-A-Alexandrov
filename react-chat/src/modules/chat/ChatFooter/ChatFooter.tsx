import React, { ChangeEvent, FormEvent, KeyboardEvent, useContext, useState } from 'react';
import AttachmentIcon from '@mui/icons-material/Attachment';
import './ChatFooter.scss';
import Modal from '../../../components/Modal';
import { MessageInputContext } from '../../../contexts/MessageInputContext';

interface ChatFooterProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const ChatFooter = ({ handleSubmit } : ChatFooterProps) => {

  const { messageInput, setMessageInput } = useContext(MessageInputContext);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

    setMessageInput({...messageInput, text: event.target.value});
  };

  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleSubmit} action="/">
        <textarea
          rows={1}
          wrap="soft"
          className="message-input"
          placeholder="Сообщение"
          value={messageInput.text ?? ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        ></textarea>
      </form>
      <AttachmentIcon onClick={openModal} className="material-symbols-outlined"/>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        Перетащите сюда файл
      </Modal>
    </div>
  );
};

export default ChatFooter;
