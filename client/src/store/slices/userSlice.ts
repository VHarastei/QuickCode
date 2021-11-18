import { IUser, LoadingState } from './../types';
import { RootState } from './../index';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserSliceState = {
  data: IUser | null;
  loadingState: LoadingState;
};

const initialState: UserSliceState = {
  data: null,
  loadingState: LoadingState.NEVER,
};

export const fetchGetMe = createAsyncThunk<IUser>(
  'user/fetchGetMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth', {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const user = await response.json();
      if (user.message === 'Unauthorized') return rejectWithValue(user.message);
      return user;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserSliceState['data']>) => {
      state.data = action.payload;
    },
    setUserLoadingState: (state, action: PayloadAction<LoadingState>) => {
      state.loadingState = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchGetMe.fulfilled.type, (state, action: PayloadAction<IUser>) => {
        state.data = action.payload;
        state.loadingState = LoadingState.LOADED;
      })
      .addCase(fetchGetMe.pending.type, (state) => {
        state.loadingState = LoadingState.LOADING;
      })
      .addCase(fetchGetMe.rejected.type, (state) => {
        state.loadingState = LoadingState.ERROR;
      }),
});

export const { setUserData, setUserLoadingState } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;
export const selectUserLoadingState = (state: RootState) => state.user.loadingState;

export default userSlice.reducer;
