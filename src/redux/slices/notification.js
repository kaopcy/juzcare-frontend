import { createSlice, createAction } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
   name: 'notifications',
   initialState: {
      notifications: []
   },
   reducers: {
      setNotification: (state, action) => {
         state.notifications = action.payload.notifications;
      },
   },
});

export const openNotification = createAction('openNotification');
export default  notificationSlice.reducer;
export const { setNotification } = notificationSlice.actions;
