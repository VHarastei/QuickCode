import React, { KeyboardEvent, useRef } from 'react';

export const LessonKeyboard: React.FC = ({ children }) => {
  const lesson = useRef<null | HTMLDivElement>(null);
  // const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
  //   if (!lesson.current) return;
  //   const location = e.location;
  //   Array.from(lesson.current.children[1].children).forEach((ul) => {
  //     Array.from(ul.children).forEach((li) => {
  //       if (
  //         li.classList.contains(
  //           `key-${`${e.key.toLowerCase()}${!!location ? `-${location}` : ''}`}`
  //         ) ||
  //         (e.key === ' ' && li.classList.contains('key-space'))
  //       ) {
  //         li.classList.add('bg-keyBlack');
  //         li.classList.add('text-white');
  //       }
  //     });
  //   });
  // };
  // const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
  //   if (!lesson.current) return;
  //   const location = e.location;
  //   Array.from(lesson.current.children[1].children).forEach((ul) => {
  //     Array.from(ul.children).forEach((li) => {
  //       if (
  //         li.classList.contains(
  //           `key-${`${e.key.toLowerCase()}${!!location ? `-${location}` : ''}`}`
  //         ) ||
  //         (e.key === ' ' && li.classList.contains('key-space'))
  //       ) {
  //         li.classList.remove('bg-keyBlack');
  //         li.classList.remove('text-white');
  //       }
  //     });
  //   });
  // };

  const handleKeyEvent = (e: KeyboardEvent<HTMLDivElement>, callback: (li: Element) => void) => {
    if (!lesson.current) return;
    const location = e.location;
    Array.from(lesson.current.children[1].children).forEach((ul) => {
      Array.from(ul.children).forEach((li) => {
        if (
          li.classList.contains(
            `key-${`${e.key.toLowerCase()}${!!location ? `-${location}` : ''}`}`
          ) ||
          (e.key === ' ' && li.classList.contains('key-space'))
        ) {
          callback(li);
        }
      });
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    handleKeyEvent(e, (li) => {
      li.classList.add('bg-keyBlack');
      li.classList.add('text-white');
    });
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    handleKeyEvent(e, (li) => {
      li.classList.remove('bg-keyBlack');
      li.classList.remove('text-white');
    });
  };

  return (
    <div ref={lesson} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      {children}
      <div className="m-auto max-w-3.5xl w-full bg-gray-400 rounded-xl p-5 text-keyBlack">
        <ul className="flex text-base leading-5">
          <Key value={['~', '`']} />
          <Key value={['!', '1']} />
          <Key value={['@', '2']} />
          <Key value={['#', '3']} />
          <Key value={['$', '4']} />
          <Key value={['%', '5']} />
          <Key value={['^', '6']} />
          <Key value={['&', '7']} />
          <Key value={['*', '8']} />
          <Key value={['(', '9']} />
          <Key value={[')', '0']} />
          <Key value={['_', '-']} />
          <Key value={['+', '=']} />
          <Key value="Backspace" className="bg-gray-300 w-24" />
        </ul>
        <ul className="flex text-base leading-5">
          <Key value="Tab" className="bg-gray-300 w-20" />
          <Key value="Q" />
          <Key value="W" />
          <Key value="E" />
          <Key value="R" />
          <Key value="T" />
          <Key value="Y" />
          <Key value="U" />
          <Key value="I" />
          <Key value="O" />
          <Key value="P" />
          <Key value={['{', '[']} />
          <Key value={['}', ']']} />
          <Key value={['|', '\\']} className="w-16" />
        </ul>
        <ul className="flex text-base leading-5">
          <Key value="Caps Lock" customKeyClass="key-capslock" className="bg-gray-300 w-24" />
          <Key value="A" />
          <Key value="S" />
          <Key value="D" />
          <Key value="F" />
          <Key value="G" />
          <Key value="H" />
          <Key value="J" />
          <Key value="K" />
          <Key value="L" />
          <Key value={[':', ';']} />
          <Key value={['"', "'"]} />
          <Key value="Enter" className="bg-gray-300 w-25" />
        </ul>
        <ul className="flex text-base leading-5">
          {/* w-26 */}
          <Key value="Shift" customKeyClass="key-shift-1" className="bg-gray-300 w-28" />
          <Key value="Z" />
          <Key value="X" />
          <Key value="C" />
          <Key value="V" />
          <Key value="B" />
          <Key value="N" />
          <Key value="M" />
          <Key value={['<', ',']} />
          <Key value={['>', '.']} />
          <Key value={['?', '/']} />
          <Key value="Shift" customKeyClass="key-shift-2" className="bg-gray-300 w-34" />
        </ul>
        <ul className="flex text-base leading-5">
          <Key value="Ctrl" customKeyClass="key-control-1" className="bg-gray-300 w-20" />
          <Key value="Alt" customKeyClass="key-alt-1" className="bg-gray-300 w-20" />
          <Key value="" customKeyClass="key-space" className="w-98" />
          <Key value="Alt" customKeyClass="key-alt-2" className="bg-gray-300 w-20" />
          <Key value="Ctrl" customKeyClass="key-control-2" className="bg-gray-300 w-20" />
        </ul>
      </div>
    </div>
  );
};

type KeyPropsType = {
  value: string | string[];
  customKeyClass?: string | string[];
  className?: string;
};

const Key: React.FC<KeyPropsType> = ({ value, customKeyClass, className }) => {
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
