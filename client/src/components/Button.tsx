import React from 'react';

type PropsType = {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
};

export const Button: React.FC<PropsType> = ({
  children,
  variant = 'primary',
  fullWidth,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium ${
        variant === 'primary'
          ? 'text-white bg-indigo-600 hover:bg-indigo-700'
          : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'
      } ${fullWidth ? 'w-full' : ''} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};
