import client from '@/graphql/apollo-client';
import {
   DeleteReportGQL,
   GetAllReportsGQL,
   GetAllTagsGQL,
   UpdateStatusReportGQL,
   UpdateStatusTagGQL,
} from '@/graphql/admin.gql';

export const getAllReports = async () => {
   const { data } = await client.query({
      fetchPolicy: 'no-cache',
      query: GetAllReportsGQL,
   });
   return data.reports.reports;
};

export const getAllTags = async () => {
   const { data } = await client.query({
      fetchPolicy: 'no-cache',
      query: GetAllTagsGQL,
   });
   return data.getAllTags;
};

export const updateStatusReport = async ({ reportId, type }) => {
   const { data } = await client.mutate({
      fetchPolicy: 'no-cache',
      mutation: UpdateStatusReportGQL,
      variables: {
         updateStatusReportData: { reportId, type },
      },
   });
   return data.updateStatusReport;
};

export const updateStatusTag = async ({ _id, status }) => {
   console.log(_id, status);
   const { data } = await client.mutate({
      fetchPolicy: 'no-cache',
      mutation: UpdateStatusTagGQL,
      variables: {
         updateStatusTag: { _id, status },
      },
   });
   return data.updateStatusReport;
};

export const deleteReport = async ({ reportId }) => {
   const { data } = await client.mutate({
      fetchPolicy: 'no-cache',
      mutation: DeleteReportGQL,
      variables: {
         deleteReportData: { _id: reportId },
      },
   });

   return data.deleteReport;
};
