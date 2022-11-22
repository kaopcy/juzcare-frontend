import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   accounts: null,
   isLoading: false,
   error: null,
};

const adminAccountsSlice = createSlice({
   name: 'adminAccounts',
   initialState,
   reducers: {
      startFetchAccounts: (state) => {
         state.isLoading = true;
      },
      fetchAccountsSuccess: (state, action) => {
         state.isLoading = false;
         state.accounts = action.payload.accounts;
      },
      fetchAccountsFailed: (state, action) => {
         state.isLoading = false;
         state.error = action.payload.error;
      },
      updateAccounts: (state, action) => {
         state.isLoading = false;
         state.accounts = action.payload.accounts;
      },
   },
});

export const adminAccountReducer = adminAccountsSlice.reducer;
export const { fetchAccountsFailed, fetchAccountsSuccess, startFetchAccounts, updateAccounts } =
   adminAccountsSlice.actions;
