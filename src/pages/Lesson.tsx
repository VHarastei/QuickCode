import React, { KeyboardEvent, KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import restartIcon from 'assets/restart.svg';
import speedIcon from 'assets/speed.svg';
import accuracyIcon from 'assets/accuracy.svg';
import keyboardIcon from 'assets/keyboard.svg';
import errorIcon from 'assets/error.svg';
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

  const startLesson = () => {
    if (invisibleInput.current && currentChar) {
      invisibleInput.current.focus();
      currentChar.classList.add(`bg-green-500`);
      currentChar.classList.add(`text-white`);
    }
  };

  const [currentChar, setCurrentChar] = useState(lessonCode.current?.children[0]);

  const changeCurrentChart = (newVal: Element) => {
    setCurrentChar(newVal);
    newVal.classList.add(`bg-green-500`);
    newVal.classList.add(`text-white`);
  };

  useEffect(() => {
    setCurrentChar(lessonCode.current?.children[0]);
  }, []);

  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!currentChar || !lessonCode.current) return;
    const chars = Array.from(lessonCode.current.children);
    const currCharIndex = chars.indexOf(currentChar);
    let isError = !!currentChar.classList.contains('bg-red-500');

    const cleanUp = (props: string[]) => {
      props.forEach((i) => currentChar.classList.remove(i));
    };

    if (e.key === 'Backspace' && isError) {
      currentChar.classList.add(`bg-green-500`);
      cleanUp(['bg-red-500']);
      return;
    } else if (e.key === 'Backspace') {
      cleanUp(['text-white', 'text-black', 'bg-red-500', 'bg-green-500']);
      changeCurrentChart(chars[currCharIndex - 1]);
      return;
    }

    if (isError || e.key === ('Shift' || 'Ctrl')) return;

    if (e.key === 'Enter' && currentChar.textContent === '\n') {
      let skippedChars = 1;
      while (chars[currCharIndex + skippedChars].textContent === '\t') skippedChars++;
      return changeCurrentChart(chars[currCharIndex + skippedChars]);
    }

    if (e.key === currentChar.textContent) {
      cleanUp(['text-white', 'bg-red-500', 'bg-green-500']);
      currentChar.classList.add(`text-black`);
      changeCurrentChart(chars[currCharIndex + 1]);
    } else {
      cleanUp(['bg-green-500']);
      currentChar.classList.add(`bg-red-500`);
    }
  };

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
          <h4 className="text-3xl font-semibold mr-4">01:25</h4>
          <Button>
            <img className="mr-1" src={restartIcon} width={24} height={24} alt="restart icon" />
            Restart
          </Button>
        </div>
      </div>
      <Paper className="mt-4">
        <pre ref={lessonCode} className="text-lg text-gray-500 font-medium font-mono">
          {example.split('').map((char, i) => {
            if (char === '\n')
              return (
                <span className="before:enter before:bg-red-500 text-white px-1" key={i}>
                  {'\n'}
                </span>
              );

            return (
              <span
                key={i}
                //className={`${char === currentChar ? 'bg-green-500' : ''}`}
              >
                {char}
              </span>
            );
          })}
        </pre>
        <input ref={invisibleInput} onKeyDown={handleInput} />
        <Button onClick={startLesson}>Start</Button>
      </Paper>
    </div>
  );
};

<div className="flex gap-8 mb-4">
  <div>
    <div className="flex items-center opacity-50">
      <img className="mr-1" src={speedIcon} width={36} height={36} alt="speed icon" />
      <span className="text-xl font-semibold">Speed</span>
    </div>
    <div className="text-indigo-600">
      <span className="text-3xl font-bold">25.7</span>
      <span className="text-xs font-semibold">WPM</span>
    </div>
  </div>
  <div>
    <div className="flex items-center opacity-50">
      <img className="mr-1 p-0.5" src={accuracyIcon} width={36} height={36} alt="accuracy icon" />
      <span className="text-xl font-semibold">Accuracy</span>
    </div>
    <div className="text-indigo-600">
      <span className="text-3xl font-bold">95.45</span>
      <span className="text-xs font-semibold">%</span>
    </div>
  </div>
  <div>
    <div className="flex items-center opacity-50">
      <img className="mr-1" src={keyboardIcon} width={36} height={36} alt="keyboard icon" />
      <span className="text-xl font-semibold">Typed</span>
    </div>
    <div className="text-indigo-600">
      <span className="text-3xl font-bold">231</span>
      <span className="text-xs font-semibold">CHARS</span>
    </div>
  </div>
  <div>
    <div className="flex items-center opacity-50">
      <img className="mr-1" src={errorIcon} width={36} height={36} alt="error icon" />
      <span className="text-xl font-semibold">Errors</span>
    </div>
    <div className="text-indigo-600">
      <span className="text-3xl font-bold">21</span>
      <span className="text-xs font-semibold">CHARS</span>
    </div>
  </div>
</div>;
