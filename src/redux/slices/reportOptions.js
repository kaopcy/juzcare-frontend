import { createAction, createSlice } from '@reduxjs/toolkit';
import { SORT_BY_TIME, DESCENDING, ASCENDING } from '@/configs/reportConfig/reportSortOrder.config';
import { UNVERIFIED } from '@/configs/reportConfig/reportStatus.config';

const initialState = {
   tags: [],
   isLoading: false,
   error: null,
   sort: SORT_BY_TIME,
   order: DESCENDING,
   filter: "",
   activeTags: [],
   page: 0,
   nextPage: -1,
   search: '',
};

const reportOptionsSlice = createSlice({
   name: 'reportOptions',
   initialState,
   reducers: {
      startFetchTag: (state) => {
         state.isLoading = true;
      },
      clearOptions: (state) => {
         state.sort = SORT_BY_TIME;
         state.order = DESCENDING;
         state.filter = '';
         state.activeTags = [];
         state.page = 1;
         state.search = '';
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
      updateNextPage: (state, action) => {
         state.nextPage = action.payload.nextPage;
      },
      updateSearch: (state, action) => {
         state.search = action.payload.search;
      },
      updateSort: (state, action) => {
         state.sort = action.payload.sort;
      },
      toggleOrder: (state, action) => {
         if (action.payload?.order) state.order = action.payload.order;
         else state.order = state.order === ASCENDING ? DESCENDING : ASCENDING;
      },
      updateFilter: (state, action) => {
         state.filter = action.payload.filter;
      },
      updateActiveTags: (state, action) => {
         action.payload.activeTags.forEach((activeTag) => {
            const index = state.activeTags.findIndex((e) => e.name == activeTag.name);
            if (index !== -1) state.activeTags.splice(index, 1);
            else state.activeTags.push(activeTag);
         });
      },
   },
});

// this action take "tagsQuery"
export const fetchTag = createAction('fetchTag');

export const getOptions = (state) => state.reportOptions;

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
   clearOptions,
   updateNextPage,
} = reportOptionsSlice.actions;
export default reportOptionsSlice.reducer;
