import { Label, TextInput } from 'flowbite-react';
import React from 'react';

const InputField: React.FC<{
  id: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  shadow?: boolean;
}> = ({ id, label, placeholder, type, required, shadow }) => {
  return (
    <React.Fragment>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        shadow={shadow}
      />
    </React.Fragment>
  );
};

export default InputField;
