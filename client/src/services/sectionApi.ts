import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISection, ISectionWithLesson } from '../store/types';

export const sectionApi = createApi({
  reducerPath: 'sectionApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/sections' }),
  endpoints: (builder) => ({
    getSections: builder.query<ISection[], null>({
      query: () => ``,
    }),
    getSectionById: builder.query<ISectionWithLesson, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetSectionsQuery, useGetSectionByIdQuery } = sectionApi;
