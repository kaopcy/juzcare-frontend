import { createSlice } from '@reduxjs/toolkit';

const imageGallerySlice = createSlice({
   name: 'imageGallery',
   initialState: {
      isOpen: false,
      src: '',
   },
   reducers: {
      open: (state, action) => {
         state.isOpen = true;
         state.src = action.payload.src;
      },
      close: (state) => {
         state.isOpen = false;
      },
   },
});

const imageGalleryReducer = imageGallerySlice.reducer;

export default imageGalleryReducer;
export const { close, open } = imageGallerySlice.actions;
