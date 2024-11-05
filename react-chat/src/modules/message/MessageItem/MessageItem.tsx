import { Message } from '../../../api';
import { parseTime } from '../../../utils/functions';
import './MessageItem.scss';
import DoneAllIcon from '@mui/icons-material/DoneAll';

type MessageProps = {
    message: Message;
}

const MessageItem = ({ message }: MessageProps) => {
  return (
    <div
      className={
        message.sender.id === localStorage.getItem('userId')
          ? 'message-send-container'
          : 'message-received-container'
      }
    >
      <div
        className={
          message.sender.id === localStorage.getItem('userId')
            ? 'message message-send'
            : 'message message-received'
        }
      >
        <div>{message.text}</div>
        <p className="timestamp">
          {parseTime(message.created_at || '')}
          {/* {message.sended && 
                    <DoneAllIcon
                      style={{ fontSize: '15px' }}
                      className="timestamp-icon"
                    />} */}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
