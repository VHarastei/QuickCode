import React from 'react';

type PropsType = {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<PropsType> = ({
  children,
  variant = 'primary',
  fullWidth,
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium disabled:!bg-gray-500 ${
        variant === 'primary'
          ? 'text-white bg-indigo-600 hover:bg-indigo-700'
          : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
      } ${fullWidth ? 'w-full' : ''}  ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};
