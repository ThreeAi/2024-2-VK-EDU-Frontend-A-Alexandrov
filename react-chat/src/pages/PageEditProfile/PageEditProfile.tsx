import { useEffect, useState } from 'react';
import ChatLayout from '../../layouts/ChatLayout';
import ProfileHeader from '../../modules/profile/ProfileHeader';
import './PageEditProfile.scss';
import InputField from '../../components/InputField';
import EditAvatar from '../../components/EditAvatar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchUserAction,
  updateUserAction,
} from '../../store/userProcess/userActions';
import {
  getIsUserDataLoading,
  getUser,
} from '../../store/userProcess/selectors';
import { UserService } from '../../api';
import Spinner from '../../components/Spinner';

const PageEditProfile = () => {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const dispatch = useAppDispatch();

  const user = useAppSelector(getUser);
  const isUserDataLoading = useAppSelector(getIsUserDataLoading);

  useEffect(() => {
    dispatch(fetchUserAction(localStorage.getItem('userId') || ''));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateUserAction({ ...user, [name]: value }));
  };

  const handleAvatarChange = (file: File) => {
    dispatch(
      updateUserAction({ ...user, avatar: URL.createObjectURL(file) })
    );
    setAvatarFile(file);
  };

  const handleSubmit = () => {
    const userId = localStorage.getItem('userId');
    userId &&
            UserService.userPartialUpdate(
              userId,
              avatarFile ? { ...user, avatar: avatarFile } : { ...user, avatar: undefined }
            ).then(() => dispatch(fetchUserAction(localStorage.getItem('userId') || '')))
  };

  return (
    <ChatLayout>
      <ProfileHeader onSubmit={handleSubmit} />
      {isUserDataLoading ? (
        <Spinner />
      ) : (
        <div className="profile-form">
          <EditAvatar
            avatar={(user.avatar as string) || null}
            onAvatarChange={handleAvatarChange}
          />

          <InputField
            label={'First name'}
            name={'first_name'}
            value={user.first_name}
            description={undefined}
            onChange={handleChange}
          />
          <InputField
            label={'Last name'}
            name={'last_name'}
            value={user.last_name}
            description={undefined}
            onChange={handleChange}
          />
          <InputField
            label={'Username'}
            name={'username'}
            value={user.username}
            description={'Minimum Length is 5 characters'}
            onChange={handleChange}
          />
          <InputField
            label={'Bio'}
            name={'bio'}
            value={user.bio || ''}
            description={'Any details about you'}
            onChange={handleChange}
          />
        </div>
      )}
    </ChatLayout>
  );
};

export default PageEditProfile;
