import { call, put, take } from 'redux-saga/effects';
import {
   initialFinished,
   initialRequest,
   signInFailed,
   signInSuccess,
   signOut,
   startSignIn,
   startRegister,
   startSignInAdmin,
} from '../slices/user';

// utils
import { getStoredToken, removeStoredToken, setStoredToken } from '@/utils/storageUtils';
// services

import { getUser, loginAdmin, loginUser, register } from '@/services/auth.services';

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
            const { payload, type } = yield take([startSignIn.type, startSignInAdmin.type, startRegister.type]);
            let authResponse = null;
            if (type === startSignIn.type) {
               authResponse = yield call(loginUser, payload);
            } else if (type === startRegister.type) {
               authResponse = yield call(register, payload);
            } else if (type === startSignInAdmin.type) {
               authResponse = yield call(loginAdmin, payload);
            }
            console.log(authResponse.accessToken)
            if (!authResponse.accessToken) throw new Error('No accesseToken provided');
            yield put(signInSuccess({ user: authResponse }));
            yield call(setStoredToken, authResponse.accessToken);
         } catch (error) {
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
