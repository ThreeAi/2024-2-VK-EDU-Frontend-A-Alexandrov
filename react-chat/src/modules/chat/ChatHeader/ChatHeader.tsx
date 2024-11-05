import './ChatHeader.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import avatar from '../../../assets/img/avatar.jpg';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import HeaderLayout from '../../../layouts/HeaderLayout';

type ChatHeaderProps = {
  title: string
}

const ChatHeader = ({title}: ChatHeaderProps) => {
  return (
    <HeaderLayout>
      <Link to={AppRoute.Chats}>
        <ArrowBackIosIcon
          style={{ marginRight: '15px' }}
          className="material-symbols-outlined"
        />
      </Link>
      <img alt="Avatar" className="avatar" src={avatar} />
      <div className="chat-user-info">
        <h3 className="user-name">{title}</h3>
        <p className="last-seen">была 2 часа назад</p>
      </div>
      <SearchIcon className="material-symbols-outlined" />
      <MoreVertIcon className="material-symbols-outlined" />
    </HeaderLayout>
  );
};

export default ChatHeader;
