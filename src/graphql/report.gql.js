import { gql } from '@apollo/client';

export const CreateReportGQL = gql`
   mutation ($createReportData: CreateReportInput!) {
      createReport(createReportData: $createReportData) {
         _id   
      }
   }
`;
