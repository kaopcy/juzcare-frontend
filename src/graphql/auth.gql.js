import { gql } from '@apollo/client';

export const LoginGQL = gql`
   query ($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
         _id
         email
         emailType
         username
         firstName
         lastName
         phone
         accessToken
         avatar {
            _id
            avatarUrl
         }
      }
   }
`;

export const LoginAdminGQL = gql`
   query ($email: String!, $password: String!) {
      loginAdmin(email: $email, password: $password) {
         _id
         email
         emailType
         username
         firstName
         lastName
         phone
         accessToken
         avatar {
            _id
            avatarUrl
         }
      }
   }
`

export const GetMeUserGQL = gql`
   query {
      getMe {
         _id
         email
         emailType
         username
         firstName
         lastName
         phone
         accessToken
         avatar {
            _id
            avatarUrl
         }
      }
   }
`;

export const RegisterGQL = gql`
   mutation register($registerData: CreateUserInput!) {
      registerUser(registerData: $registerData) {
         _id
         email
         emailType
         username
         firstName
         lastName
         phone
         accessToken
         avatar {
            _id
            avatarUrl
         }
      }
   }
`;

export const GetNotificationGQL = gql`
   query {
      getNotifications {
         _id
         isWatched
         detail
         type
         reportId
         createdAt
      }
   }
`;
