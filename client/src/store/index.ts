import { sectionsApi } from '../services/sectionsApi';
import { lessonsApi } from '../services/lessonsApi';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [sectionsApi.reducerPath]: sectionsApi.reducer,
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sectionsApi.middleware, lessonsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
