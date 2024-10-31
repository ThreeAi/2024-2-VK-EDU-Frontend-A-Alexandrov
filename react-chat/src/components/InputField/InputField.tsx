import './InputField.scss';

type InputFieldProps = {
    label: string;
    name: string;
    value: string;
    description?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, name, value, onChange, description } : InputFieldProps) => {
  return (
    <div className="input-group-conteiner">
      <div className="input-group">
        <label>{label}</label>
        <input
          type="text"
          name={name} 
          value={value}
          onChange={onChange}
        />
      </div>
      {description && <div className="description">{description}</div>}
    </div>
  );
};

export default InputField;
