import accuracyIcon from 'assets/accuracy.svg';
import errorIcon from 'assets/error.svg';
import keyboardIcon from 'assets/keyboard.svg';
import restartIcon from 'assets/restart.svg';
import speedIcon from 'assets/speed.svg';
import startIcon from 'assets/start.svg';
import { CustomModal } from 'components/CustomModal';
import { DifficultyBadge } from 'components/DifficultyBadge';
import { LessonKeyboard } from 'components/LessonKeyboard';
import { useCounter } from 'hooks/useCounter';
import { useKeyboardInput } from 'hooks/useKeyboardInput';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
//let example = `1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n1\n2\n3\n4`;
let example = `class Greeter {\n\tpublic greet() {\n\t\tconsole.log("Hello, " + this.getName());\n\t}\n\tprotected getName() {\n\t\treturn "hi";\n\t}\n}\nclass SpecialGreeter extends Greeter {\n\tpublic howdy() {\n\t\t// OK to access protected member here\n\t\tconsole.log("Howdy, " + this.getName());\n\t}\n}\n\nconst g = new SpecialGreeter();\ng.greet(); // OK\ng.getName();`;

export const Lesson: React.FC = () => {
  const invisibleInput = useRef<null | HTMLInputElement>(null);
  const lessonCode = useRef<null | HTMLPreElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(true);
  const [indicators, setIndicators] = useState({ wpm: 0, accuracy: 100 });
  const { currentChar, typed, isLessonEnded, handleInput } = useKeyboardInput(lessonCode);
  const { counter } = useCounter(!isOpenModal && !isLessonEnded);

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
    // here i use custom wpm formula, because with original f. when you hit error wpm falls heavily
    const wpm = +(((typed.total - typed.wrong) / 5 / (counter.time + 0.1)) * 60).toFixed(0);
    const accuracy = +(((typed.total - typed.wrong) / (typed.total + 0.00001)) * 100).toFixed(0);
    setIndicators({
      wpm: wpm > 0 ? wpm : 0,
      accuracy: accuracy === 0 ? 100 : accuracy,
    });
  }, [typed, counter.time]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-3xl font-semibold mr-4">{lesson.name}</h3>
          <DifficultyBadge difficulty={lesson.difficulty} size="large" />
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
      <LessonKeyboard>
        <Paper className="my-4">
          <div className="flex gap-6">
            <Indicator name="Speed" measure="WPM" value={indicators.wpm} icon={speedIcon} />
            <Indicator
              name="Accuracy"
              measure="%"
              value={indicators.accuracy}
              icon={accuracyIcon}
            />
            <Indicator name="Typed" measure="CHARS" value={typed.total} icon={keyboardIcon} />
            <Indicator name="Errors" measure="CHARS" value={typed.wrong} icon={errorIcon} />
          </div>
          <div className="relative mt-2">
            <pre
              ref={lessonCode}
              className="text-base text-gray-500 font-medium font-mono max-h-44 overflow-y-scroll"
            >
              {example.split('').map((char, i) => (
                <span className={char === '\n' ? 'before:enter text-white px-1' : ''} key={i}>
                  {char}
                </span>
              ))}
            </pre>
            <div
              className={`transition-all absolute top-0 min-w-full min-h-full bg-white opacity-0 ${
                isLessonEnded ? 'opacity-100' : ''
              } flex items-center justify-center flex-col`}
            >
              <h3 className="text-4xl text-indigo-600 font-semibold">Congratulation!</h3>
              <h4 className="text-2xl text-gray-500 font-semibold">
                You have passed the lesson, you can start the next lesson or try again
              </h4>
              <div className="flex gap-4 w-1/2 mt-4">
                <Link className="w-full" to={`/lessons/typescript/random`}>
                  <Button fullWidth>Next lesson</Button>
                </Link>
                <Link className="w-full" to={`/lessons/typescript`}>
                  <Button fullWidth>See more lessons</Button>
                </Link>
              </div>
            </div>
          </div>
          {!isLessonEnded && (
            <input
              ref={invisibleInput}
              onBlur={() => invisibleInput?.current?.focus()}
              onKeyDown={handleInput}
              className="fixed -left-full"
            />
          )}
        </Paper>
      </LessonKeyboard>
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
    </div>
  );
};

type IndicatorPropsType = {
  name: string;
  measure: string;
  value: number;
  icon: string;
};

const Indicator: React.FC<IndicatorPropsType> = ({ name, measure, value, icon }) => {
  return (
    <div className="flex items-end max-h-8 max-w-s w-full">
      <div className="flex items-end opacity-50 mr-1">
        <img className="mr-1" src={icon} width={32} height={32} alt={icon} />
        <span className="text-lg font-semibold">{name}:</span>
      </div>
      <div className="text-indigo-600">
        <span className="text-3xl font-bold ">{value}</span>
        <span className="text-xs font-semibold">{measure}</span>
      </div>
    </div>
  );
};
