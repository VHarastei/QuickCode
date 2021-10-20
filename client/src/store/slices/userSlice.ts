import { RootState } from './../index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {}

export type UserSliceState = {
  data: User | null;
};

const initialState: UserSliceState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserSliceState['data']>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserData = (state: RootState) => state.user.data;

export default userSlice.reducer;
