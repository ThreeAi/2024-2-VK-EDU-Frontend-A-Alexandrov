import './ChatsModalCreat.scss';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};


//пока загатовка, думаю чтоб делать превью чата, без его создания, нужно использовать redux из 9 дз
const ChatsModalCraete = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
					&times;
        </button>
        <h3>Создать новый чат</h3>
      </div>
    </div>
  );
};

export default ChatsModalCraete;
