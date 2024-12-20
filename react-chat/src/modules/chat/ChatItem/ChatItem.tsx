import { useRef/* , useEffect */ } from 'react';
import avatar from '../../../assets/img/avatar.jpg';
// import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
// import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
// import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import './ChatItem.scss';
import { AppRoute } from '../../../utils/const';
import { Link } from 'react-router-dom';
import { Chat } from '../../../api';
import { parseTime, truncateText } from '../../../utils/functions';

type ChatItemProps = {
	chat: Chat;
}

const ChatItem = ({chat}: ChatItemProps) => {
  const chatItemRef = useRef<HTMLDivElement | null>(null);

  return (
    <Link to={AppRoute.Chat.replace(':chatId', (chat.id || '').toString())}>
      <div ref={chatItemRef} className="chat-item">
        <div className="avatar-conteiner">
          <img className="avatar" src={chat.avatar || avatar} alt="avatar" />
        </div>
        <div className="chat-message">
          <span className="chat-name">{chat.title}</span>
          <p>{truncateText(chat.last_message?.text, 30)}</p>
        </div>
        <div className="chat-details">
          <span className="chat-time">{parseTime(chat.updated_at || '')}</span>
          {/* {chat.unread ? (
            <span
              className={
                chat.tag ? 'taged-unread-count' : 'unread-count'
              }
            >
              {chat.tag && (
                <AlternateEmailOutlinedIcon
                  style={{ fontSize: '17px' }}
                />
              )}
              {chat.unread}
            </span>
          ) : chat.read ? (
            <DoneAllOutlinedIcon className="material-symbols-outlined chat-symbol" />
          ) : (
            <CheckOutlinedIcon className="material-symbols-outlined chat-symbol" />
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
