import { SectionType } from '../store/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sectionsApi = createApi({
  reducerPath: 'sectionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getSections: builder.query<SectionType[], void>({
      query: () => `sections`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetSectionsQuery } = sectionsApi;
