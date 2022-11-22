import { combineReducers } from '@reduxjs/toolkit';

import { adminAccountReducer } from './admin/admin-accounts.slice';
import { adminReportsReducer } from './admin/admin-reports.slice';
import { adminTagsReducer } from './admin/admin-tags.slice';

import userReducer from './slices/user';
import notificationReducer from './slices/notification';
import reportOptionsReducer from './slices/reportOptions';
import reportsReducer from './slices/reports';
import loadingReducer from './slices/loading';
import imageGalleryReducer from './slices/ImageGallery';

const rootReducer = combineReducers({
   user: userReducer,
   notifications: notificationReducer,
   reportOptions: reportOptionsReducer,
   reports: reportsReducer,
   loading: loadingReducer,
   imageGallery: imageGalleryReducer,
   adminAccount: adminAccountReducer,
   adminReports: adminReportsReducer,
   adminTags: adminTagsReducer,
});



export default rootReducer;
