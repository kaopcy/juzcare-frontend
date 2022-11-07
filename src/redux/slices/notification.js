import { createSlice , createAction } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
   name: 'notification',
   initialState: [],
   reducers: {
      setNotification: (state , action)=>{
         state = action.payload.notification
      }
   }
})

export const openNotification = createAction("openNotification")
export const { setNotification } = notificationSlice.actions