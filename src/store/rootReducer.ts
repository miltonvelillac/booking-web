import { combineReducers } from '@reduxjs/toolkit';
// Import feature reducers here, e.g.:
import { counterReducer } from '@/features/counter/counterSlice';
import { authReducer } from '@/store/auth/authSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<RootReducer>;
