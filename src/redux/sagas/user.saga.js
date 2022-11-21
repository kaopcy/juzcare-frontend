import { call, put, take } from 'redux-saga/effects';
import {
   initialFinished,
   initialRequest,
   signInFailed,
   signInSuccess,
   signOut,
   startSignIn,
   startRegister,
} from '../slices/user';

// utils
import { getStoredToken, removeStoredToken, setStoredToken } from '@/utils/storageUtils';
// services

import { getUser, signIn, register } from '@/services/auth.services';

function* initialUsers() {
   yield take(initialRequest.type);
   const accessToken = yield call(getStoredToken);
   if (accessToken) {
      try {
         const getUserResponse = yield call(getUser);
         yield put(signInSuccess({ user: getUserResponse }));
         return getUserResponse;
      } catch (error) {
         console.log(error);
         console.log('error catched ');
         yield put(
            signInFailed({
               error: error instanceof Error ? error.message : 'unknow error',
            }),
         );
         return null;
      }
   }
   yield put(initialFinished());
   return null;
}

export function* authorizationFlow() {
   let initialUserResponse = yield call(initialUsers);
   while (true) {
      if (!initialUserResponse?.accessToken) {
         try {
            const { payload, type } = yield take([startSignIn.type, startRegister.type]);
            let authResponse = null;
            if (type === startSignIn.type) {
               authResponse = yield call(signIn, payload);
            } else if (type === startRegister.type) {
               authResponse = yield call(register, payload);
            }
            console.log('error not catched by saga');
            if (!authResponse.accessToken) throw new Error('No accesseToken provided');
            yield put(signInSuccess({ user: authResponse }));
            yield call(setStoredToken, authResponse.accessToken);
         } catch (error) {
            console.log('error catched by saga');
            console.log(error);
            yield put(
               signInFailed({
                  error: error instanceof Error ? error.message || 'unknow error' : 'unknow error',
               }),
            );
            continue;
         }
      }
      yield take(signOut.type);
      yield call(removeStoredToken);
      window.location.reload();
      initialUserResponse = null;
   }
}
