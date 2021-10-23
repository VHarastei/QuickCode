import { sectionApi } from '../services/sectionApi';
import { lessonApi } from '../services/lessonApi';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [sectionApi.reducerPath]: sectionApi.reducer,
    [lessonApi.reducerPath]: lessonApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sectionApi.middleware, lessonApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
