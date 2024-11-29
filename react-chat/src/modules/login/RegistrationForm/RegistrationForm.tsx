import { MouseEventHandler, useState } from 'react';
import InputField, { PasswordField } from '../../../components/InputField'
import { ApiError, RegisterService } from '../../../api';

type RegistrationFormProps = {
    onChange: MouseEventHandler<HTMLButtonElement>;
}

const RegistrationForm = ({onChange}: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    bio: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await RegisterService.registerCreate(formData);
      console.log('User registered:', response);
      alert('Registration successful!');
    } catch (error) {
      const apiError = error as ApiError;
      console.error('Registration error:', apiError.body.detail);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Username" name="username" value={formData.username} onChange={handleChange} />
      <PasswordField label="Password" name="password" value={formData.password} onChange={handleChange} />
      <InputField label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
      <InputField label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
      <InputField label="Bio" name="bio" value={formData.bio} onChange={handleChange} />
      <div className='login-form-buttons'>
        <button onClick={onChange}>Login</button>
        <button type="submit">Registration</button>
      </div>
    </form>
  );
}

export default RegistrationForm;