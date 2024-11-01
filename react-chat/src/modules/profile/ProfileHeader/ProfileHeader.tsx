import './ProfileHeader.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';import HeaderLayout from '../../../layouts/HeaderLayout';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';

const ProfileHeader = () => {
  return (
    <HeaderLayout>
      <Link to={AppRoute.Chats}>
        <ArrowBackIosIcon
          style={{ marginRight: '15px' }}
          className="material-symbols-outlined"
        />
      </Link>
      <h3 className="edit-title">Edit Profile</h3>
      <DoneOutlinedIcon className="material-symbols-outlined" />
    </HeaderLayout>
  );
};

export default ProfileHeader;
