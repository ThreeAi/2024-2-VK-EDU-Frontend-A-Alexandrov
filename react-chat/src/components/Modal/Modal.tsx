import { ReactNode } from 'react';
import './Modal.scss';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
    children: ReactNode;
};


const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
					&times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;