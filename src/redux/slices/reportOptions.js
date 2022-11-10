import { createAction, createSlice } from '@reduxjs/toolkit';
import { ASCENDING, SORT_BY_LIKE, DESCENDING } from '@/configs/reportConfig/reportSortOrder.config';
import { WAITING } from '@/configs/reportConfig/reportStatus.config';

const initialState = {
   tags: [],
   isLoading: false,
   error: null,
   sort: SORT_BY_LIKE,
   order: ASCENDING,
   filter: WAITING,
   activeTags: [],
   page: 1,
   search: '',
};

const reportOptionsSlice = createSlice({
   name: 'reportOptions',
   initialState,
   reducers: {
      startFetchTag: (state) => {
         state.isLoading = true;
      },
      
      fetchTagSucceed: (state, action) => {
         state.isLoading = false;
         state.tags = action.payload.tags;
      },

      fetchTagFail: (state, action) => {
         state.isLoading = false;
         state.error = action.payload.error;
      },
      updatePage: (state, action) => {
         state.page = action.payload.page;
      },
      updateSearch: (state, action) => {
         state.search = action.payload.search;
      },
      updateSort: (state, action) => {
         state.sort = action.payload.sort;
      },
      toggleOrder: (state) => {
         state.order = state.order === ASCENDING ? DESCENDING : ASCENDING;
      },
      updateFilter: (state, action) => {
         state.filter = action.payload.filter;
      },
      updateActiveTags: (state, action) => {
         action.payload.activeTags.forEach((activeTag) => {
            const index = state.activeTags.findIndex(e => e._id == activeTag._id);
            if (index !== -1) state.activeTags.splice(index, 1);
            else state.activeTags.push(activeTag);
         });
      },
   },
});

export const fetchTag = createAction('fetchTag');

export const {
   fetchTagFail,
   fetchTagSucceed,
   startFetchTag,
   updateFilter,
   toggleOrder,
   updateSort,
   updateActiveTags,
   updatePage,
   updateSearch,
} = reportOptionsSlice.actions;
export default reportOptionsSlice.reducer;
