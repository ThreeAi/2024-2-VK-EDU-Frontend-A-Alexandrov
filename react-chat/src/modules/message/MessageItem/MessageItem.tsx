import { Message } from '../../../utils/const';
import './MessageItem.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';

type MessageProps = {
    message: Message;
}

const MessageItem = ({ message }: MessageProps) => {
  return (
    <div
      className={
        message.sended
          ? 'message-send-container'
          : 'message-received-container'
      }
    >
      <div
        className={
          message.sended
            ? 'message message-send'
            : 'message message-received'
        }
      >
        <div>{message.text}</div>
        <p className="timestamp">
          {message.time}
          {message.sended && 
                    <DoneAllIcon
                      style={{ fontSize: '15px' }}
                      className="timestamp-icon"
                    />}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
