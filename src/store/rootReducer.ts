import { combineReducers } from '@reduxjs/toolkit';
// Import feature reducers here, e.g.:
import { counterReducer } from '@/features/counter/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<RootReducer>;
