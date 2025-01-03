import './ChatHeader.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatarDefault from '../../../assets/img/avatar.jpg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import HeaderLayout from '../../../layouts/HeaderLayout';

type ChatHeaderProps = {
  avatar: string | undefined,
  title: string
}

const ChatHeader = ({avatar, title}: ChatHeaderProps) => {
  return (
    <HeaderLayout>
      <Link to={AppRoute.Chats}>
        <ArrowBackIosIcon
          style={{ marginRight: '15px' }}
          className="material-symbols-outlined"
        />
      </Link>
      <img alt="Avatar" className="avatar" src={avatar || avatarDefault} />
      <div className="chat-user-info">
        <h3 className="user-name">{title}</h3>
      </div>
      <SearchIcon className="material-symbols-outlined" />
      <MoreVertIcon className="material-symbols-outlined" />
    </HeaderLayout>
  );
};

export default ChatHeader;
