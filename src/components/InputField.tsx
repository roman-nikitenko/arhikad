import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type: "text" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputField: React.FC<InputFieldProps> = ({ name, type, label, onChange, value }) => {
  return (
    <label className="flex flex-col">
      <p className="ml-1 text-[color:var(--accent-color)]">{label}</p>
      <input name={name} value={value} type={type} onChange={onChange} className="input-form" />
    </label>
  );
};
