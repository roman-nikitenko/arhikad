import React from "react";

type ButtonProp = {
  title: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  isDisabled?: boolean;
};

export const Button: React.FC<ButtonProp> = ({
  title,
  onClick,
  type,
  isDisabled,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={`px-5 py-3 ${
        isDisabled
          ? "bg-[color:var(--disabled-button)]"
          : "bg-[color:var(--accent-color)] hover:bg-emerald-700 transition"
      }  text-[var(--light)] `}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
