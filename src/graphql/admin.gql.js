import { gql } from '@apollo/client';

export const GetAllReportsGQL = gql`
   query {
      reports(sort: "SORT_BY_TIME", order: "DESCENDING", filter: [], tags: [], page: 0, pageAmount: 100000) {
         reports {
            _id
            upVotes {
               _id
            }
            comments {
               _id
            }
            user {
               avatar {
                  avatarUrl
               }
               firstName
               lastName
            }
            detail
            title
            status {
               type
            }
            location {
               _id
               name
            }
            upVotes {
               _id
            }
            createdAt
            tags {
               _id
               name
               status
            }
            medias {
               _id
               imageUrl
            }
         }
      }
   }
`;

export const GetAllTagsGQL = gql`
   query {
      getAllTags {
         _id
         name
         status
         createdAt
      }
   }
`;

export const UpdateStatusReportGQL = gql`
   mutation ($updateStatusReportData: UpdateStatusReportInput!) {
      updateStatusReport(updateStatusReportData: $updateStatusReportData) {
         status {
            admin {
               _id
            }
            type
         }
      }
   }
`;

export const DeleteReportGQL = gql`
   mutation ($deleteReportData: DeleteReportInput!) {
      deleteReport(deleteReportData: $deleteReportData) {
         user {
            username
         }
      }
   }
`;

export const UpdateStatusTagGQL = gql`
   mutation($updateStatusTag: UpdateTagInput!) {
      updateStatusTag(updateTagData: $updateStatusTag) {
         _id
      }
   }
`;
