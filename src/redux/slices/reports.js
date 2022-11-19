import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   reports: [],
   isLoading: false,
   error: null,
};

const reportsSlice = createSlice({
   name: 'reports',
   initialState,
   reducers: {
      startFetchReport: (state) => {
         state.isLoading = true;
      },
      fetchReportsSuccess: (state, action) => {
         state.isLoading = false;
         state.reports = action.payload.reports;
      },
      fetchReportsFailed: (state, action) => {
         state.isLoading = true;
         state.error = action.payload.reports;
      },
   },
});

export const { startFetchReport, fetchReportsFailed, fetchReportsSuccess } = reportsSlice.actions;
export default reportsSlice.reducer;
