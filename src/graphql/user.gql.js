import { gql } from '@apollo/client';

export const FindReportsByUserIdGQL = gql`
   query {
      findReportsByUserId {
         _id
         title
         status {
            type
         }
         tags {
            name
            _id
         }
         location {
            name
         }
         createdAt
      }
   }
`;

export const UpdateUserGQL = gql`
   mutation ($userUserdata: UpdateUserInput!) {
      updateUser(updateUserData: $userUserdata) {
         _id
         email
         emailType
         username
         firstName
         lastName
         phone
         avatar {
            _id
            avatarUrl
         }
      }
   }
`;

export const UpdateUserAvatarGQL = gql`
   mutation {
      updateAvatarUser {
         avatar {
            _id
            avatarUrl
            createdAt
            updatedAt
         }
      }
   }
`;
