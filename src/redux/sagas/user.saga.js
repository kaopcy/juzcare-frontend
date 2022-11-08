import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { initialRequest, signInSuccess, startSighIn, signInFailed, signOut } from '../slices/user';
// utils
import { getStoredToken, setStoredToken, removeStoredToken } from '@/utils/storageUtils';
// services
import { getUser, signIn } from '@/services/auth.services';

function* initialUsers() {
   yield take(initialRequest.type);
   const accessToken = yield call(getStoredToken);
   if (accessToken) {
      try {
         const getUserResponse = yield call(getUser, { accessToken });
         yield put(signInSuccess({ user: getUserResponse.user }));
         return getUserResponse;
      } catch (error) {
         yield put(
            signInFailed({
               error: error instanceof Error ? error.message : 'unknow error',
            }),
         );
         return null;
      }
   }
   return null;
}

export function* authorizationFlow() {
   const initialUserResponse = yield call(initialUsers);
   while (true) {
      if (!initialUserResponse?.accessToken) {
         try {
            const { payload } = yield take(startSighIn.type);
            const signInResponse = yield call(signIn, payload);
            if (!signInResponse.accessToken) throw new Error();
            yield put(signInSuccess({ user: signInResponse?.user }));
            console.log(payload)
            yield call(setStoredToken, signInResponse);
         } catch (error) {
            if (error.message)
               yield put(
                  signInFailed({
                     error: error instanceof Error ? error.message : 'unknow error',
                  }),
               );
         }
      }
      yield take(signOut.type);
      console.log('signout');
      yield call(removeStoredToken);
   }
}
