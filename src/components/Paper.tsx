import React from 'react';

type PropsType = {
  className?: string;
};

export const Paper: React.FC<PropsType> = ({ children, className }) => {
  return (
    <div
      className={`w-full p-4 rounded-md shadow-sm bg-white
       ${className}`}
    >
      {children}
    </div>
  );
};
