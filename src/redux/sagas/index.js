import { all } from 'redux-saga/effects';
import { authorizationFlow } from './user.saga';
import { notificationFlow } from './notification.saga';
import { reportFlow } from './reports.saga';

export function* rootSaga() {
   yield all([authorizationFlow(), notificationFlow(), reportFlow()]);
}
