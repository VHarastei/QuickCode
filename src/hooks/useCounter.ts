import { useEffect, useState } from 'react';

export const useCounter = (isActive: boolean) => {
  const [counter, setCounter] = useState({
    second: '00',
    minute: '00',
    time: 0,
  });

  const handleChangeCounter = (newTime: number) => {
    const second = String(newTime % 60);
    const minute = String(Math.floor(newTime / 60));

    const computedSecond = second.length === 1 ? `0${second}` : second;
    const computedMinute = minute.length === 1 ? `0${minute}` : minute;

    setCounter({
      second: computedSecond,
      minute: computedMinute,
      time: newTime,
    });
  };
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (isActive) {
      timerId = setTimeout(() => handleChangeCounter(counter.time + 1), 1000);
    }
    return () => clearTimeout(timerId);
  }, [isActive, counter]);

  return {
    counter,
    restartCounter: () => handleChangeCounter(0),
  };
};
