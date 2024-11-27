import './ProfileHeader.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIosNew';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';import HeaderLayout from '../../../layouts/HeaderLayout';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';

type ProfileHeaderProps = {
  onSubmit: () => void;
}

const ProfileHeader = ({ onSubmit }: ProfileHeaderProps) => {
  return (
    <HeaderLayout>
      <Link to={AppRoute.Chats}>
        <ArrowBackIosIcon
          style={{ marginRight: '15px' }}
          className="material-symbols-outlined"
        />
      </Link>
      <h3 className="edit-title">Edit Profile</h3>
      <button onClick={onSubmit}>
        <DoneOutlinedIcon className="material-symbols-outlined" />
      </button>
    </HeaderLayout>
  );
};

export default ProfileHeader;
