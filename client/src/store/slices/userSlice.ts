import { IUser } from './../types';
import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserSliceState = {
  data: IUser | null;
  isLoading: boolean;
};

const initialState: UserSliceState = {
  data: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserSliceState['data']>) => {
      state.data = action.payload;
    },
    setUserIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUserData, setUserIsLoading } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;
export const selectUserIsLoading = (state: RootState) => state.user.isLoading;

export default userSlice.reducer;
