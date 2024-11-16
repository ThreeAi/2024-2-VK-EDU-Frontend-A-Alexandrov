import Modal from '../../../components/Modal';
// import './ChatsModalCreat.scss';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
};


//пока загатовка, думаю чтоб делать превью чата, без его создания, нужно использовать redux из 9 дз
const ChatsModalCreate = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <h3>Создать новый чат</h3>
    </Modal>
  );
};

export default ChatsModalCreate;
