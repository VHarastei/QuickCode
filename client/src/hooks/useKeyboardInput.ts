import { useState, KeyboardEvent, useEffect } from 'react';
export const useKeyboardInput = (lessonCode: React.MutableRefObject<HTMLPreElement | null>) => {
  const [currentChar, setCurrentChar] = useState(lessonCode.current?.children[0]);
  const [typed, setTyped] = useState({
    total: 0,
    wrong: 0,
  });
  const [isLessonEnded, setIsLessonEnded] = useState(false);

  const changeCurrentChar = (newVal: Element) => {
    //this check if next item === undefined, end lesson
    if (!newVal && lessonCode.current) {
      lessonCode.current.classList.add('overflow-y-hidden');
      return setIsLessonEnded(true);
    }
    setCurrentChar(newVal);
    newVal.classList.add(`bg-green-500`);
    newVal.classList.add(`text-white`);
    newVal.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const cleanUp = (s: string[]) => s.forEach((i) => currentChar?.classList.remove(i));

  useEffect(() => {
    setCurrentChar(lessonCode.current?.children[0]);
  }, [lessonCode]);

  const handleInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!currentChar || !lessonCode.current) return;
    const chars = Array.from(lessonCode.current.children);
    const currCharIndex = chars.indexOf(currentChar);
    let isError = !!currentChar.classList.contains('bg-red-500');

    if (e.key === 'Backspace' && isError) {
      currentChar.classList.add(`bg-green-500`);
      cleanUp(['bg-red-500']);
      return;
    } else if (e.key === 'Backspace' && currCharIndex !== 0) {
      cleanUp(['text-white', 'text-black', 'bg-red-500', 'bg-green-500']);

      let skippedChars = 1;
      while (chars[currCharIndex - skippedChars].textContent === '\t') skippedChars++;
      return changeCurrentChar(chars[currCharIndex - skippedChars]);
    } else if (e.key === 'Backspace' && currCharIndex === 0) {
      return;
    }

    if (isError || e.key === 'Shift') return;

    if (e.key === 'Enter' && currentChar.textContent === '\n') {
      cleanUp(['bg-green-500']);

      let skippedChars = 1;
      while (chars[currCharIndex + skippedChars].textContent === '\t') skippedChars++;
      return changeCurrentChar(chars[currCharIndex + skippedChars]);
    }

    setTyped((prev) => ({ ...prev, total: prev.total + 1 }));

    if (e.key === currentChar.textContent) {
      cleanUp(['text-white', 'bg-red-500', 'bg-green-500']);
      currentChar.classList.add(`text-black`);
      changeCurrentChar(chars[currCharIndex + 1]);
    } else {
      cleanUp(['bg-green-500']);
      currentChar.classList.add(`bg-red-500`);
      setTyped((prev) => ({ ...prev, wrong: prev.wrong + 1 }));
    }
  };

  return { currentChar, setCurrentChar, handleInput, typed, isLessonEnded };
};
