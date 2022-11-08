import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import { notificationReducer } from './slices/notification';

const rootReducer = combineReducers({
   user: userReducer,
   notifications: notificationReducer,
});

export default rootReducer;
