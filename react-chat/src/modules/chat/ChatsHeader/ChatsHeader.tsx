import './ChatsHeader.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HeaderLayout from '../../../layouts/HeaderLayout';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';

const ChatsHeader = () => {
  return (
    <HeaderLayout>
      <Link to={AppRoute.EditProfile}>
        <MenuIcon className="material-symbols-outlined" />
      </Link>
      <h3 className="chats-title">Messenger</h3>
      <SearchIcon className="material-symbols-outlined" />
    </HeaderLayout>
  );
};

export default ChatsHeader;
