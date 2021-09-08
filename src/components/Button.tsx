import React from 'react';

export const Button: React.FC = ({ children }) => {
  return (
    <div className="bg-green text-white py-2 px-12 font-medium text-xl cursor-pointer hover:bg-green-light">
      {children}
    </div>
  );
};
