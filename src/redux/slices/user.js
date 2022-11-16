import { createSlice, createAction } from '@reduxjs/toolkit';
import errorMessageUtils from '@/utils/errorMessageUtils';
import { getStoredToken } from '@/utils/storageUtils';
import { dispatch } from '../store';

const initialState = {
   user: null,
   error: null,
   isLoading: false,
   isAuthenticated: false,
   isInitialized: false,
};

const userSlice = createSlice({
   name: 'user',
   initialState: initialState,
   reducers: {
      startSighIn: (state) => {
         state.isLoading = true;
         state.isAuthenticated = false;
      },
      initialFinished: (state)=>{
         state.isInitialized = true
      },
      signInSuccess: (state, action) => {
         state.isLoading = false;
         state.user = action.payload.user;
         state.isAuthenticated = true;
         state.isInitialized = true;
         state.error = null;
      },
      signInFailed: (state, action) => {
         state.isAuthenticated = false;
         state.isLoading = false;
         state.isInitialized = true;
         state.error = action.payload.error;
      },
      signOut: (state) => {
         state.user = null;
         state.isAuthenticated = false;
      },
   },
});

export const initialRequest = createAction('initialUser');
export const { signInSuccess, signInFailed, signOut, startSighIn , initialFinished} = userSlice.actions;

export default userSlice.reducer;
