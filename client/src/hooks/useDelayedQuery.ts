import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useEffect, useState } from 'react';

export const useDelayedQuery = <A, T>(
  queryArg: A,
  query: UseQuery<
    QueryDefinition<
      A,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
      never,
      T,
      string
    >
  >,
  ms: number = 400
): T | undefined => {
  const [delay, setDelay] = useState(false);
  const { data } = query(queryArg, { skip: delay });

  useEffect(() => {
    if (!!!data) {
      setDelay(true); // because when we set default skip: true, RTKQ doesn`t use cache
    }
    const handler = setTimeout(() => {
      setDelay(false);
    }, ms);

    return () => clearTimeout(handler);
  }, [data, ms]);

  return data;
};
