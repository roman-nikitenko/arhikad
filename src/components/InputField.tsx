import React from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type: "text" | "email";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isRequired?: boolean;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ 
   name,
   type,
   label,
   onChange,
   value,
   isRequired,
   placeholder
 }) => {
  return (
    <label className="flex flex-col">
      <p className={`ml-1 ${isRequired && 'after:content-["*"] after:ml-0.5 after:text-red-500'}  text-[color:var(--accent-color)]`}>{label}</p>
      <input
       name={name}
       value={value}
       type={type}
       onChange={onChange} 
       className="input-form"
       placeholder={placeholder}
       />
    </label>
  );
};
