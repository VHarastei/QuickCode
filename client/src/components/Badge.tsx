import React from 'react';

type PropsType = {
  color: string;
  value: string;
  size?: 'normal' | 'large';
};

export const Badge: React.FC<PropsType> = ({ value, color, size = 'normal' }) => {
  return (
    <div
      className={`flex items-center ${
        size === 'normal' ? 'text-sm px-3' : 'text-lg px-4 py-0.5'
      } bg-${color}-200 text-${color}-800 rounded-full font-semibold`}
    >
      {value}
    </div>
  );
};
