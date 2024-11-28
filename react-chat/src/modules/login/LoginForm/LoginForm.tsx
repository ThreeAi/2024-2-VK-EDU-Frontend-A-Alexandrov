import { MouseEventHandler, useState } from 'react';
import InputField from '../../../components/InputField';
import { TokenObtainPair } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import { useAppDispatch } from '../../../hooks';
import { loginAction } from '../../../store/userProcess/userActions';

type LoginFormProps = {
	onChange: MouseEventHandler<HTMLButtonElement>;
}

const LoginForm = ({onChange}: LoginFormProps) => {

  const [credentials, setCredentials] = useState<TokenObtainPair>({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    dispatch(loginAction(credentials)).then(() =>
      navigate(AppRoute.Chats)
    )
      .catch(message => setError(message));  
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <div>
        <button type="submit">Login</button>
        <button onClick={onChange}>Registration</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
