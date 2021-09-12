import React from 'react';

type PropsType = {
  color: string;
  value: string;
};

export const Badge: React.FC<PropsType> = ({ value, color }) => {
  return (
    <div
      className={`flex items-center text-sm px-3 bg-${color}-200 text-${color}-800 rounded-full font-semibold`}
    >
      {value}
    </div>
  );
};
