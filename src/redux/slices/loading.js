import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isLoading: false,
};

const loadingSlice = createSlice({
   name: 'loading',
   initialState,
   reducers: {
      startLoading: (state) => {
         state.isLoading = true;
      },
      stopLoading: (state) => {
         state.isLoading = false;
      },
   },
});

const loadingReducer = loadingSlice.reducer;
export const { startLoading, stopLoading } = loadingSlice.actions;

export default loadingReducer;
