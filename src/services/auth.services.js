import { fakeAuthPayload } from '@/_mock/index';
import client from '@/graphql/apollo-client';

import { RegisterGQL, LoginGQL, GetMeUserGQL } from '@/graphql/auth.gql';

const NETWORK_DELAY = 1000;

const combineParamsUrl = (paramsObject) =>
   Object.entries(paramsObject).reduce(
      (acc, [k, v], index) => (v ? `${acc}${index === 0 ? '?' : '&'}${k}=${v}` : acc),
      'http://localhost:3001/reports',
   );

export const getUser = async () => {
   const { data } = await client.query({
      query: GetMeUserGQL,
   })
   return data.getMeUser;
};

export const signIn = async ({ email, password }) => {
   const { data } = await client.query({
      query: LoginGQL,
      variables: {
         email,
         password,
      },
   });
   return data.loginUser;
};

export const register = async ({ email, emailType, username, password, firstName, lastName, phone, role }) => {
   console.log('called email: ', email, emailType);
   const { data } = await client.mutate({
      mutation: RegisterGQL,
      variables: {
         registerData: {
            email,
            emailType,
            username,
            password,
            firstName,
            lastName,
            phone,
            role,
         },
      },
   });
   console.log(data.registerUser);
   return data.registerUser;
};
