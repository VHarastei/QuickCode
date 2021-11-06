import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './../store/types';

export const authApi = createApi({
  reducerPath: 'authApi',
  tagTypes: ['User'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/auth/' }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    signIn: builder.mutation<IUser, { tokenId: string }>({
      query: (body) => ({
        url: ``,
        method: 'POST',
        body,
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignInMutation } = authApi;
