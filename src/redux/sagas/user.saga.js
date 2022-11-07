import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { initialRequest, signInSuccess, startSighIn, signInFailed } from '../slices/user';
// utils
import { getStoredToken, setStoredToken, removeStoredToken } from '@/utils/storageUtils';
// services
import { getUser, signIn } from '@/services/auth.services';

const delaySomething = (returnVal, ms, isRej = false) =>
   new Promise((res, rej) => setTimeout(() => (isRej ? rej(new Error({ message: 'error' })) : res(returnVal)), ms));

const fakeCall = async (payload) => await delaySomething(payload || 'heloo kao', 2000);

function* initialUser(payload) {
   try {
      yield put(startSighIn());
      const response = yield call(fakeCall, payload);
      yield put(signIn({ user: response }));
   } catch (error) {
      yield put(signInFailed({ error: error }));
   }
}

export function* authorizationFlow() {
   const { payload } = yield take(initialRequest.type);
   const accessToken = yield call(getStoredToken);
   let getUserResponse;
   if (accessToken) {
      try {
         getUserResponse = yield call(getUser, { accessToken });
         yield put(signInSuccess({ user: getUserResponse.user }));
      } catch (error) {
         yield put(
            signInFailed({
               error: error instanceof Error ? error.message : 'unknow error',
            }),
         );
      }
   }

   while (true) {
      if (!getUserResponse?.accessToken) {
         try {
            const { payload } = yield take(startSighIn.type);
            const signInResponse = yield call(signIn, payload);
            yield put(signInSuccess({ user: signInResponse?.user }));
         } catch (error) {
            if (error.message)
               yield put(
                  signInFailed({
                     error: error instanceof Error ? error.message : 'unknow error',
                  }),
               );
         }
      }
      // initial
      yield;
   }
}
