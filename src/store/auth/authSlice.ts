import { AuthUserModel } from '@/utils/models/authUserModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type AuthState = {
  user: AuthUserModel | null;
  status: 'idle' | 'loading' | 'authenticated' | 'error';
  error?: string | null;
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.status = 'loading';
      state.error = null;
    },
    setSession(
      state,
      action: PayloadAction<{ user: AuthUserModel | null }>
    ) {
      state.user = action.payload.user ?? null;
      state.status = 'authenticated';
      state.error = null;
    },
    setError(state, action: PayloadAction<string | null | undefined>) {
      state.status = 'error';
      state.error = action.payload ?? 'Unknown error';
    },
    clearSession() {
      return { ...initialState };
    },
  },
});

export const { setLoading, setSession, setError, clearSession } = authSlice.actions;
export const authReducer = authSlice.reducer;

// Selectors
export const selectAuth = (s: { auth: AuthState }) => s.auth;
export const selectIsAuthenticated = (s: { auth: AuthState }) => !!s.auth.user?.token;
export const selectAuthUser = (s: { auth: AuthState }) => s.auth.user;
