import { gql } from '@apollo/client';

export const CreateReportGQL = gql`
   mutation ($createReportData: CreateReportInput!) {
      createReport(createReportData: $createReportData) {
         _id
         user {
            _id
            email
            username
         }
         detail
         title
         locationDetail
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
            imageUrl
         }
      }
   }
`;

export const LocationGQL = gql`
   query {
      getAllLocations {
         _id
         name
      }
   }
`;

export const GetReportsGQL = gql`
   query ($sort: String!, $order: String!, $filter: [String!]!, $tags: [String!]!, $page: Int!, $pageAmount: Int!) {
      reports(sort: $sort, order: $order, filter: $filter, tags: $tags, page: $page, pageAmount: $pageAmount) {
         nextPage
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

export const GetPopularTagGQL = gql`
   query ($tagsQuery: String!) {
      getPopularTags(name: $tagsQuery) {
         _id
         name
      }
   }
`;

export const UpVoteGQL = gql`
   mutation ($_id: String!) {
      upVoteReport(_id: $_id) {
         _id
      }
   }
`;