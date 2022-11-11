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
      startFetchReport: (state, action) => {},
   },
});

export const { startFetchReport } = reportsSlice.actions;
export default reportsSlice.reducer;
