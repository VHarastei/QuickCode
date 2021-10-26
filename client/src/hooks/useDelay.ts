import { useState, useEffect } from 'react';

export const useDelay = <T>(condition: T): boolean => {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    if (!!!condition) {
      setDelay(true); // because when we set skip: true, RTKQ doesn`t use cache
    }
    const handler = setTimeout(() => {
      setDelay(false);
    }, 400);

    return () => clearTimeout(handler);
  }, [condition]);

  return delay;
};
