import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/user';
import notificationReducer from './slices/notification';
import reportOptionsReducer from './slices/reportOptions';
import reportsReducer from './slices/reports';

const rootReducer = combineReducers({
   user: userReducer,
   notifications: notificationReducer,
   reportOptions: reportOptionsReducer,
   reports: reportsReducer,
});

export default rootReducer;
