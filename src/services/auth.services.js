import client from '@/graphql/apollo-client';

import { GetMeUserGQL, LoginAdminGQL, LoginGQL, RegisterGQL } from '@/graphql/auth.gql';

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
   return data.registerUser;
};
