import './EditAvatar.scss';
import avatarDefault from '../../assets/img/avatar.jpg';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

interface EditAvatarProps {
  avatar: string | null;
  onAvatarChange: (file: File) => void;
}

const EditAvatar = ({ avatar, onAvatarChange }: EditAvatarProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onAvatarChange(e.target.files[0]);
    }
  };

  return (
    <div className="avatar-container">
      <img alt="Avatar" className="avatar" src={avatar || avatarDefault} />
      <div className="icon-container">
        <label htmlFor="avatar-input">
          <CameraAltOutlinedIcon style={{ fontSize: '36px', cursor: 'pointer' }} />
        </label>
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default EditAvatar;
