import { authApi } from './../services/authApi';
import { sectionApi } from '../services/sectionApi';
import { lessonApi } from '../services/lessonApi';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { userApi } from 'services/userApi';

export const store = configureStore({
  reducer: {
    [sectionApi.reducerPath]: sectionApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      sectionApi.middleware,
      lessonApi.middleware,
      userApi.middleware,
      authApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
