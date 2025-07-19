import React from "react";


interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  name,
  className = "",
  disabled = false,
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
