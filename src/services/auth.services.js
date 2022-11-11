import { fakeAuthPayload } from '@/_mock/index';

const NETWORK_DELAY = 1000;
const combineParamsUrl = (paramsObject) =>
   Object.entries(paramsObject).reduce(
      (acc, [k, v], index) => (v ? `${acc}${index === 0 ? '?' : '&'}${k}=${v}` : acc),
      'http://localhost:3001/reports',
   );

export const getUser = async ({ accessToken }) => {
   const response = await new Promise((res) => setTimeout(() => res(fakeAuthPayload), NETWORK_DELAY));
   return response;
};

export const signIn = async ({ email, password }) => {
   const response = await new Promise((res) => setTimeout(() => res(fakeAuthPayload), NETWORK_DELAY));
   return response;
};
