import { combineReducers } from '@reduxjs/toolkit';

import historySlice from './slices/historySlice';
import themeSlice from './slices/themeSlice';

const rootReducer = combineReducers({
  history: historySlice,
  theme: themeSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
