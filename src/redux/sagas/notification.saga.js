import { put, take } from 'redux-saga/effects';
import { signInSuccess } from '../slices/user';
import { setNotification } from '../slices/notification';

export function* notificationFlow() {
   while (true) {
      const { payload } = yield take(signInSuccess);
      console.log('clg from notification: ', payload);
      yield put(setNotification({ notifications: payload.user?.notifications }));
   }
}