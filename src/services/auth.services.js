import { fakeAuthPayload } from '@/_mock/index';
import client from '@/graphql/apollo-client';

import { RegisterGQL, LoginGQL, GetMeUserGQL, LoginAdminGQL } from '@/graphql/auth.gql';

const NETWORK_DELAY = 1000;

const combineParamsUrl = (paramsObject) =>
   Object.entries(paramsObject).reduce(
      (acc, [k, v], index) => (v ? `${acc}${index === 0 ? '?' : '&'}${k}=${v}` : acc),
      'http://localhost:3001/reports',
   );

export const getUser = async () => {
   const { data } = await client.query({
      fetchPolicy: 'no-cache',
      query: GetMeUserGQL,
   });
   return data.getMe;
};

export const loginUser = async ({ email, password }) => {
   const { data } = await client.query({
      fetchPolicy: 'no-cache',
      query: LoginGQL,
      variables: {
         email,
         password,
      },
   });
   return data.loginUser;
};

export const loginAdmin = async ({ email, password }) => {
   const { data } = await client.query({
      fetchPolicy: 'no-cache',
      query: LoginAdminGQL,
      variables: {
         email,
         password,
      },
   });
   return data.loginAdmin;
};

export const register = async ({ email, emailType, username, password, firstName, lastName, phone, role }) => {
   console.log('called email: ', email, emailType);
   const { data } = await client.mutate({
      fetchPolicy: 'no-cache',
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
