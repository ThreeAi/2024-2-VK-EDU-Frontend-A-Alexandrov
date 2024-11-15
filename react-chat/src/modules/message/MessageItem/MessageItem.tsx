import { Message } from '../../../api';
import { parseTime } from '../../../utils/functions';
import './MessageItem.scss';
// import DoneAllIcon from '@mui/icons-material/DoneAll';

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
        {message.files && message.files.length > 0 && (
          <div className="message-images">
            {message.files.map((file, index) => {
              return (
                  <img
                    key={index}
                    src={(file as any).item}
                    alt="attachment"
                    className="message-image"
                  />
              );
            })}
          </div>
        )}
        <div>{message.text}</div>
        <p className="timestamp">
          {parseTime(message.created_at || '')}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
