import { SectionType } from '../store/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lessonsApi = createApi({
  reducerPath: 'lessonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getLessons: builder.query<SectionType[], string>({
      query: (id) => `lessons/${id}`,
    }),
  }),
});

export const { useGetLessonsQuery } = lessonsApi;
