import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISection, ISectionWithLesson } from '../store/types';

export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getSections: builder.query<ISection[], null>({
      query: () => `sections`,
    }),
    getSectionById: builder.query<ISectionWithLesson, string>({
      query: (id) => `sections/${id}`,
    }),
  }),
});

export const { useGetSectionsQuery, useGetSectionByIdQuery } = sectionApi;
