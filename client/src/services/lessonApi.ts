import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAttempt, ICreateAttempt, ILesson } from '../store/types';

export const lessonApi = createApi({
  reducerPath: 'lessonApi',
  tagTypes: ['Lesson'],
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getLesson: builder.query<ILesson, string>({
      query: (id) => `lessons/${id}`,
    }),
    createAttempt: builder.mutation<IAttempt, ICreateAttempt>({
      query: (body) => ({
        url: `/attempts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Lesson'],
    }),
  }),
});

export const { useGetLessonQuery, useCreateAttemptMutation } = lessonApi;
