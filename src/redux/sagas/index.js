import { all } from 'redux-saga/effects';
import { authorizationFlow } from './user.saga';
import { notificationFlow } from './notification.saga';

export function* rootSaga() {
   yield all([authorizationFlow(), notificationFlow()]);
}
