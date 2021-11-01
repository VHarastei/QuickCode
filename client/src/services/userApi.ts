import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProfile } from '../store/types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/users/' }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getUserProfile: builder.query<IProfile, null>({
      query: () => `profile`,
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
