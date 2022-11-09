import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
   tags: [],
   isLoading: false,
   error: null,
   sort: '',
   order: '',
   filter: '',
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
      updateOrder: (state, action) => {
         state.order = action.payload.order;
      },
      updateFilter: (state, action) => {
         state.filter = action.payload.filter;
      },
      updateActiveTags: (state, action) => {
         action.payload.activeTags.forEach((activeTag) => {
            const index = state.activeTags.indexOf(activeTag);
            if (index !== -1) state.activeTags.splice(index, 1);
            else state.activeTags.push(activeTag);
         });
      },
   },
});

export const fetchTag = createAction('fetchTag');

export const { fetchTagFail, fetchTagSucceed, startFetchTag, updateFilter, updateOrder, updateSort } =
   reportOptionsSlice.actions;
export const reportOptionsReducer = reportOptionsSlice.reducer;
