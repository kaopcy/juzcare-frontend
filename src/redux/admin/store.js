/* ---------------------------------- redux --------------------------------- */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { adminAccountReducer } from './admin-accounts.slice';
import { adminReportsReducer } from './admin-reports.slice';
import { adminTagsReducer } from './admin-tags.slice';

const rootReducer = combineReducers({
   adminAccount: adminAccountReducer,
   adminReports: adminReportsReducer,
   adminTags: adminTagsReducer,
});

const configureStoreWithSaga = () => {
   const store = configureStore({
      reducer: rootReducer,
   });
   return store;
};

const store = configureStoreWithSaga();
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, useSelector, useDispatch };
