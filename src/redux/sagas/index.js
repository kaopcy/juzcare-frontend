import { all } from 'redux-saga/effects';
import { authorizationFlow } from './user.saga';

export function* rootSaga() {
   yield all([authorizationFlow()]);
}
