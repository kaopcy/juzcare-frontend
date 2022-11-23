import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
   tags: null,
   isLoading: false,
   error: null,
};

const adminTagsSlice = createSlice({
   name: 'adminTags',
   initialState,
   reducers: {
      startFetchTags: (state) => {
         state.isLoading = true;
      },
      fetchTagsSuccess: (state, action) => {
         state.isLoading = false;
         state.tags = action.payload.tags;
      },
      fetchTagsFailed: (state, action) => {
         state.isLoading = false;
         state.error = action.payload.error;
      },
      updateTags: (state, action) => {
         state.isLoading = false;
         state.tags = action.payload.tags;
      },
   },
});

export const acceptTag = createAction('acceptTag')
export const rejectTag = createAction('rejectTag')

export const adminTagsReducer = adminTagsSlice.reducer;
export const { fetchTagsFailed, fetchTagsSuccess, startFetchTags, updateTags } = adminTagsSlice.actions;
