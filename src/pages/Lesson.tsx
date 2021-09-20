import accuracyIcon from 'assets/accuracy.svg';
import errorIcon from 'assets/error.svg';
import keyboardIcon from 'assets/keyboard.svg';
import restartIcon from 'assets/restart.svg';
import speedIcon from 'assets/speed.svg';
import startIcon from 'assets/start.svg';
import { CustomModal } from 'components/CustomModal';
import { DifficultyBadge } from 'components/DifficultyBadge';
import { useCounter } from 'hooks/useCounter';
import { useKeyboardInput } from 'hooks/useKeyboardInput';
import React, { useEffect, useRef, useState } from 'react';
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
  //let example = `class Greeter {\n\tpublic greet()`;
  let example = `class Greeter {\n\tpublic greet() {\n\t\tconsole.log("Hello, " + this.getName());\n\t}\n\tprotected getName() {\n\t\treturn "hi";}\n\t}\n}\nclass SpecialGreeter extends Greeter {\n\tpublic howdy() {\n\t\t// OK to access protected member here\n\t\tconsole.log("Howdy, " + this.getName());\n\t}\n}\n\nconst g = new SpecialGreeter();\ng.greet(); // OK\ng.getName();`;

  const invisibleInput = useRef<null | HTMLInputElement>(null);
  const lessonCode = useRef<null | HTMLPreElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(true);
  const [indicators, setIndicators] = useState({ wpm: 0, accuracy: 100 });
  const { currentChar, typed, isLessonEnded, handleInput } = useKeyboardInput(lessonCode);
  const { counter } = useCounter(!isOpenModal && !isLessonEnded);
  console.log(isLessonEnded);
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
    const accuracy = +(((typed.total - typed.wrong) / (typed.total + 0.00001)) * 100).toFixed(2);
    setIndicators({
      wpm: wpm > 0 ? wpm : 0,
      accuracy: accuracy === 0 ? 100 : accuracy,
    });
  }, [typed, counter.time]);

  return (
    <div className="my-4">
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
      <Paper className="mt-4">
        <Indicators wpm={indicators.wpm} accuracy={indicators.accuracy} typed={typed} />
        <div className="relative mt-8 mb-4">
          <pre ref={lessonCode} className="text-xl text-gray-500 font-medium font-mono">
            {example.split('').map((char, i) => (
              <span className={char === '\n' ? 'before:enter text-white px-1' : ''} key={i}>
                {char}
              </span>
            ))}
          </pre>
          <div
            className={`transition-all absolute top-0 min-w-full min-h-full bg-white opacity-0 ${
              isLessonEnded ? 'opacity-100' : ''
            } flex items-center justify-center`}
          >
            <h3 className="text-2xl text-indigo-600 font-semibold">Congratulation</h3>
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

type IndicatorsPropsType = {
  wpm: number;
  accuracy: number;
  typed: {
    total: number;
    wrong: number;
  };
};

const Indicators: React.FC<IndicatorsPropsType> = ({ wpm, accuracy, typed }) => {
  return (
    <div className="flex gap-10">
      <div>
        <div className="flex items-center opacity-50">
          <img className="mr-2" src={speedIcon} width={36} height={36} alt="speed icon" />
          <span className="text-xl font-semibold">Speed</span>
        </div>
        <div className="text-indigo-600">
          <span className="text-4xl font-bold ">{wpm}</span>
          <span className="text-sm font-semibold">WPM</span>
        </div>
      </div>
      <div>
        <div className="flex items-center opacity-50">
          <img
            className="mr-2 p-0.5"
            src={accuracyIcon}
            width={36}
            height={36}
            alt="accuracy icon"
          />
          <span className="text-xl font-semibold">Accuracy</span>
        </div>

        <div className="text-indigo-600">
          <span className="text-4xl font-bold">{accuracy}</span>
          <span className="text-sm font-semibold">%</span>
        </div>
      </div>
      <div>
        <div className="flex items-center opacity-50">
          <img className="mr-2" src={keyboardIcon} width={36} height={36} alt="keyboard icon" />
          <span className="text-xl font-semibold">Typed</span>
        </div>
        <div className="text-indigo-600">
          <span className="text-4xl font-bold">{typed.total}</span>
          <span className="text-sm font-semibold">CHARS</span>
        </div>
      </div>
      <div>
        <div className="flex items-center opacity-50">
          <img className="mr-2" src={errorIcon} width={36} height={36} alt="error icon" />
          <span className="text-xl font-semibold">Errors</span>
        </div>
        <div className="text-indigo-600">
          <span className="text-4xl font-bold">{typed.wrong}</span>
          <span className="text-sm font-semibold">CHARS</span>
        </div>
      </div>
    </div>
  );
};
