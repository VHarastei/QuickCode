import { SectionType } from '../store/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sectionsApi = createApi({
  reducerPath: 'sectionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getSections: builder.query<SectionType[], any>({
      query: () => `sections`,
    }),
    getLessonsById: builder.query<any, string>({
      query: (id) => `sections/${id}`,
    }),
  }),
});

export const { useGetSectionsQuery, useGetLessonsByIdQuery } = sectionsApi;
