import './EditAvatar.scss';
import avatar from '../../assets/img/avatar.jpg';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const EditAvatar = () => {
  return (
    <div className='avatar-container'>
      <img alt="Avatar" className="avatar" src={avatar} />
      <div className='icon-container'>
        <CameraAltOutlinedIcon style={{ fontSize: '36px' }} />
      </div>
    </div>
  );
};

export default EditAvatar;
