import React from 'react';

type ButtonProp = {
  title: string;
  onClick: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<ButtonProp> = ({ title, onClick, type }) => {
  return (
    <button className="px-5 py-3 bg-[color:var(--accent-color)] text-white hover:bg-emerald-700 transition" type={type ? type : 'button'} onClick={onClick} >{title}</button>
  );
};
