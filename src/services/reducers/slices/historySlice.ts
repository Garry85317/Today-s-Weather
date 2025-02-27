import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILocation } from '../type';

const initialState: ILocation[] = [];

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<ILocation>) => {
      state.push(action.payload);
    },
    deleteHistory: (state, action: PayloadAction<ILocation[]>) => {
      return [...action.payload];
    }
  }
});

export const { setHistory, deleteHistory } = historySlice.actions;
export default historySlice.reducer;
