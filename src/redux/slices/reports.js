import { createAction, createSlice } from '@reduxjs/toolkit';

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
      fetchMoreReportsSuccess: (state, action) => {
         state.isLoading = false;
         state.reports.push(...action.payload.reports);
      },
      fetchReportsFailed: (state, action) => {
         state.isLoading = false;
         state.error = action.payload.error;
      },
      upvoteReports: (state, action) => {
         const userId = action.payload.userId;
         const reportID = action.payload._id;
         const matchedReport = state.reports.find((e) => e._id === reportID);
         const userLikedIndex = matchedReport.upVotes.findIndex((e) => e._id === userId);
         // if already liked
         if (userLikedIndex !== -1) {
            matchedReport.upVotes.splice(userLikedIndex, 1);
         } else {
            matchedReport.upVotes.push({ _id: userId });
         }
      },
   },
});

export const fetchReports = createAction('fetchReports');
export const fetchMoreReports = createAction('fetchNextReports');

export const { startFetchReport, fetchReportsFailed, fetchReportsSuccess, fetchMoreReportsSuccess, upvoteReports } =
   reportsSlice.actions;
export default reportsSlice.reducer;
