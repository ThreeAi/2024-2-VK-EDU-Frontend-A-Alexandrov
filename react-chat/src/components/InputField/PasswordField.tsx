import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  description?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordField = ({ label, name, value, onChange, description }: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="input-group-container">
      <div className="input-group password-group">
        <label>{label}</label>
        <div>
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            name={name}
            value={value}
            onChange={onChange}
          />
          <button type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <VisibilityOffIcon/> : <VisibilityIcon/>}
          </button>
        </div>
      </div>
      {description && <div className="description">{description}</div>}
    </div>
  );
};
