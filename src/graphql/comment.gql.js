import { gql } from '@apollo/client';

export const CreateCommentReportGQL = gql`
   mutation ($createCommentReportData: CreateCommentInput!) {
      createCommentReport(createCommentReportData: $createCommentReportData) {
         comments {
            user {
               _id
               firstName
               lastName
               avatar {
                  avatarUrl
               }
            }
            _id
            body
            createdAt
         }
      }
   }
`;
