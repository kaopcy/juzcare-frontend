import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
   reports: null,
   isLoading: false,
   error: null,
};

const adminReportsSlice = createSlice({
   name: 'adminReports',
   initialState,
   reducers: {
      startFetchReports: (state) => {
         state.isLoading = true;
      },
      fetchReportsSuccess: (state, action) => {
         state.isLoading = false;
         state.reports = action.payload.reports;
      },
      fetchReportsFailed: (state, action) => {
         state.isLoading = false;
         state.error = action.payload.error;
      },
      updateReports: (state, action) => {
         state.isLoading = false;
         state.reports = action.payload.reports;
      },
   },
});

export const verifyReport = createAction('verifyReport');
export const acceptReport = createAction('acceptReport');
export const rejectReport = createAction('rejectReport');
export const finishReport = createAction('finishReport');

export const adminReportsReducer = adminReportsSlice.reducer;
export const { fetchReportsFailed, fetchReportsSuccess, startFetchReports, updateReports } = adminReportsSlice.actions;
