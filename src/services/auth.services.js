import { fakeAuthPayload } from '@/_mock/index';

export const getUser = async ({ accessToken }) => {
   const response = await new Promise((res) => setTimeout(() => res(fakeAuthPayload)));
   return response;
};

export const signIn = async ({ email, password }) => {
   const response = await new Promise((res) => setTimeout(() => res(fakeAuthPayload)));
   return response;
};
