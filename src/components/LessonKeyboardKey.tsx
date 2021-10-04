import React from 'react'


type PropsType = {
  value: string | string[];
  customKeyClass?: string | string[];
  className?: string;
};

export const LessonKeyboardKey: React.FC<PropsType> = ({ value, customKeyClass, className }) => {
  const isDual = typeof value !== typeof 'string';
  const keyClass = isDual ? `key-${value[0]} key-${value[1]}` : `key-${value}`;
  return (
    <li
      className={`${customKeyClass ? customKeyClass : keyClass.toLowerCase()} ${
        className ? className : ''
      } flex items-center flex-col justify-center w-12 h-12 bg-white m-0.5`}
    >
      {!isDual ? (
        `${value}`
      ) : (
        <>
          <span>{`${value[0]}`}</span>
          <span>{`${value[1]}`}</span>
        </>
      )}
    </li>
  );
};

