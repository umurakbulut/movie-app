import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
  isAuthenticated: boolean;
  errorMessage: string | null;
}

const initialState: IAuthState = {
  isAuthenticated: !!localStorage.getItem('isAuthenticated'),
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const { email, password } = action.payload;

      if (email === 'test@example.com' && password === 'A1234567') {
        state.isAuthenticated = true;
        state.errorMessage = null;
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        state.isAuthenticated = false;
        state.errorMessage = 'Invalid e-mail or password!';
        localStorage.removeItem('isAuthenticated');
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.errorMessage = null;
      localStorage.removeItem('isAuthenticated');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
