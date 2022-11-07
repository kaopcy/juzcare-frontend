/* ---------------------------------- redux --------------------------------- */
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';
import rootReducer from './rootReducer';
/* ---------------------------------- sagas --------------------------------- */
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const configureStoreWithSaga = () => {
   const sagaMiddleware = createSagaMiddleware();
   const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(sagaMiddleware),
   });

   sagaMiddleware.run(rootSaga);
   return store;
};

const store = configureStoreWithSaga();
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();
const { dispatch } = store;

export { dispatch, store, useSelector, useDispatch };
