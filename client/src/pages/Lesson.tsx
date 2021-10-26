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
import { useSyncState } from 'hooks/useSyncState';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCreateAttemptMutation, useGetLessonQuery } from 'services/lessonApi';
import { sectionApi } from 'services/sectionApi';
import { useAppDispatch } from 'store/hooks';
import { ICreateAttempt } from 'store/types';
import { Button } from '../components/Button';
import { Paper } from '../components/Paper';

//let example = `class Greeter {\n\tpublic greet() {\n\t\tconsole.log("Hello, " + this.getName());\n\t}\n\tprotected getName() {\n\t\treturn "hi";\n\t}\n}\nclass SpecialGreeter extends Greeter {\n\tpublic howdy() {\n\t\t// OK to access protected member here\n\t\tconsole.log("Howdy, " + this.getName());\n\t}\n}\n\nconst g = new SpecialGreeter();\ng.greet(); // OK\ng.getName();`;
//let example = `class Greeter {\n\tpublic greet() {}\n}`;

export const Lesson: React.FC = () => {
  const params: { lessonId: string; sectionId: string } = useParams();
  const { data: lesson } = useGetLessonQuery(params.lessonId);
  const [createAttempt] = useCreateAttemptMutation();
  const dispatch = useAppDispatch();

  const invisibleInput = useRef<null | HTMLInputElement>(null);
  const lessonCode = useRef<null | HTMLPreElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(true);
  const indicators = useSyncState({ wpm: 0, accuracy: 100 });

  const { currentChar, setCurrentChar, typed, isLessonEnded, handleInput } =
    useKeyboardInput(lessonCode);
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
    indicators.set({
      wpm: wpm > 0 ? wpm : 0,
      accuracy: accuracy === 0 ? 100 : accuracy,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, counter.time]);

  useEffect(() => {
    // when component is mounted, it doesn`t have lesson, here we sync and rerender
    if (lesson) setCurrentChar(lessonCode.current?.children[0]);
  }, [lesson, setCurrentChar]);

  useEffect(() => {
    if (isLessonEnded && lesson) {
      const data: ICreateAttempt = {
        lessonId: lesson.id,
        accuracy: indicators.get().accuracy,
        wpm: indicators.get().wpm,
        time: counter.time,
        errors: typed.wrong,
      };
      createAttempt(data).then(() => {
        dispatch(
          sectionApi.endpoints.getSectionById.initiate(params.sectionId, {
            subscribe: false,
            forceRefetch: true,
          })
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLessonEnded]);

  return (
    <div data-testid="lesson">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {!!lesson && (
            <>
              <h3 className="text-3xl font-semibold mr-4">{lesson.name}</h3>
              <DifficultyBadge difficulty={lesson.difficulty} size="large" />
            </>
          )}
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
      <LessonKeyboard isLessonEnded={isLessonEnded}>
        <Paper className="my-4">
          <div className="flex gap-6">
            <Indicator name="Speed" measure="WPM" value={indicators.get().wpm} icon={speedIcon} />
            <Indicator
              name="Accuracy"
              measure="%"
              value={indicators.get().accuracy}
              icon={accuracyIcon}
            />
            <Indicator name="Typed" measure="CHARS" value={typed.total} icon={keyboardIcon} />
            <Indicator name="Errors" measure="CHARS" value={typed.wrong} icon={errorIcon} />
          </div>
          <div className="relative mt-2 ">
            <pre
              ref={lessonCode}
              className="text-base text-gray-500 font-medium font-mono h-44 max-h-44 overflow-y-scroll"
            >
              {lesson ? (
                lesson.code.split('').map((char, i) => (
                  <span className={char === '\n' ? 'before:enter text-white px-1' : ''} key={i}>
                    {char}
                  </span>
                ))
              ) : (
                <div></div>
              )}
            </pre>
            <div
              className={`transition-all absolute top-0 min-w-full min-h-full bg-white opacity-0 ${
                isLessonEnded ? 'visible opacity-100' : 'invisible'
              } flex items-center justify-center flex-col`}
            >
              <h3 className="text-4xl text-indigo-600 font-semibold">Congratulation!</h3>
              <h4 className="text-2xl text-gray-500 font-semibold">
                You have passed the lesson, you can start the next lesson or try again
              </h4>
              <div className="flex gap-4 w-1/2 mt-4">
                <Link className="w-full" to={`/lessons/${params.sectionId}/random`}>
                  <Button fullWidth>Next lesson</Button>
                </Link>
                <Link className="w-full" to={`/lessons/${params.sectionId}`}>
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
          <Button fullWidth onClick={startLesson} disabled={!!!lesson}>
            {!!lesson ? 'Start Typing Now' : 'Loading...'}
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
