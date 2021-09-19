import accuracyIcon from 'assets/accuracy.svg';
import errorIcon from 'assets/error.svg';
import keyboardIcon from 'assets/keyboard.svg';
import restartIcon from 'assets/restart.svg';
import speedIcon from 'assets/speed.svg';
import startIcon from 'assets/start.svg';
import { CustomModal } from 'components/CustomModal';
import { useCounter } from 'hooks/useCounter';
import { useKeyboardInput } from 'hooks/useKeyboardInput';
import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Paper } from '../components/Paper';

type PropsType = {
  name: string;
  id: string;
  section: string;
  source: string;
  sourceCode: string;
  difficulty: 'easy' | 'medium' | 'hard';
  accuracy: number;
  lines: number;
};

export const Lesson: React.FC = () => {
  const lesson: PropsType = {
    name: 'Class Expressions',
    id: '2',
    section: 'typescript',
    source: 'https://www.typescriptlang.org/',
    sourceCode: 'https://www.typescriptlang.org/docs/handbook/2/classes.html#protected',
    difficulty: 'easy',
    accuracy: 0,
    lines: 256,
  };
  let example = `class Greeter {\n\tpublic greet() {\n\t\tconsole.log("Hello, " + this.getName());\n\t}\n}`;

  const invisibleInput = useRef<null | HTMLInputElement>(null);
  const lessonCode = useRef<null | HTMLPreElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(true);
  const { currentChar, typed, handleInput } = useKeyboardInput(lessonCode);
  const { counter } = useCounter(!isOpenModal);

  const startLesson = () => {
    if (currentChar) {
      setIsOpenModal(false);
      invisibleInput?.current?.focus();
      currentChar.classList.add(`bg-green-500`);
      currentChar.classList.add(`text-white`);
    }
  };

  const restartLesson = () => {
    //restartCounter();
    window.location.reload();
  };

  useEffect(() => {
    console.log(document.activeElement);
  }, [counter]);

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold mr-4">{lesson.name}</h3>
          <Badge
            color={
              lesson.difficulty === 'easy'
                ? 'green'
                : lesson.difficulty === 'medium'
                ? 'yellow'
                : 'red'
            }
            value={lesson.difficulty[0].toUpperCase() + lesson.difficulty.slice(1)}
            size="large"
          />
        </div>
        <div className="flex items-center">
          <h4 className="text-2xl font-semibold mr-2 text-gray-500">Time:</h4>
          <h4 className="text-3xl font-semibold mr-4 w-20">{`${counter.minute}:${counter.second}`}</h4>
          <Button onClick={restartLesson}>
            <img className="mr-1" src={restartIcon} width={24} height={24} alt="restart icon" />
            Restart
          </Button>
        </div>
      </div>
      <Paper className="mt-4">
        <div className="flex gap-8 mb-4">
          <div>
            <div className="flex items-center opacity-50">
              <img className="mr-1" src={speedIcon} width={36} height={36} alt="speed icon" />
              <span className="text-xl font-semibold">Speed</span>
            </div>
            <div className="text-indigo-600">
              <span className="text-3xl font-bold">
                {(((typed.total / 5 - typed.wrong) / (counter.time + 1)) * 60).toFixed(0)}
              </span>
              <span className="text-xs font-semibold">WPM</span>
            </div>
          </div>
          <div>
            <div className="flex items-center opacity-50">
              <img
                className="mr-1 p-0.5"
                src={accuracyIcon}
                width={36}
                height={36}
                alt="accuracy icon"
              />
              <span className="text-xl font-semibold">Accuracy</span>
            </div>
            <div className="text-indigo-600">
              <span className="text-3xl font-bold">
                {(((typed.total - typed.wrong) / typed.total) * 100).toFixed(2)}
              </span>
              <span className="text-xs font-semibold">%</span>
            </div>
          </div>
          <div>
            <div className="flex items-center opacity-50">
              <img className="mr-1" src={keyboardIcon} width={36} height={36} alt="keyboard icon" />
              <span className="text-xl font-semibold">Typed</span>
            </div>
            <div className="text-indigo-600">
              <span className="text-3xl font-bold">{typed.total}</span>
              <span className="text-xs font-semibold">CHARS</span>
            </div>
          </div>
          <div>
            <div className="flex items-center opacity-50">
              <img className="mr-1" src={errorIcon} width={36} height={36} alt="error icon" />
              <span className="text-xl font-semibold">Errors</span>
            </div>
            <div className="text-indigo-600">
              <span className="text-3xl font-bold">{typed.wrong}</span>
              <span className="text-xs font-semibold">CHARS</span>
            </div>
          </div>
        </div>

        <pre ref={lessonCode} className="text-lg text-gray-500 font-medium font-mono">
          {example.split('').map((char, i) => (
            <span className={char === '\n' ? 'before:enter text-white px-1' : ''} key={i}>
              {char}
            </span>
          ))}
        </pre>
        <input
          ref={invisibleInput}
          onBlur={() => invisibleInput?.current?.focus()}
          onKeyDown={handleInput}
          className="fixed -left-full"
        />
        <CustomModal
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
          shouldCloseOnOverlayClick={false}
          maxWidth={500}
        >
          <div className="flex flex-col items-center">
            <div className="bg-indigo-200 p-3 rounded-lg w-20">
              <img width={64} height={64} src={startIcon} alt="start icon" />
            </div>
            <h4 className="text-3xl font-semibold py-4">Please be prepared. Good luck!</h4>
            <Button fullWidth onClick={startLesson}>
              Start Typing Now
            </Button>
          </div>
        </CustomModal>
      </Paper>
    </div>
  );
};
