import client from '@/graphql/apollo-client';
import { CreateCommentReportGQL } from '@/graphql/comment.gql';
import { CreateReportProgressGQL } from '@/graphql/report.gql';

export const createCommentReport = async ({ reportId, body }) => {
   const { data } = await client.mutate({
      mutation: CreateCommentReportGQL,
      variables: {
         createCommentReportData: {
            reportId,
            body,
         },
      },
   });
   return data.createCommentReport;
};

export const createProgressReport = async ({ reportId, detail, medias }) => {
   const { data } = await client.mutate({
      mutation: CreateReportProgressGQL,
      variables: {
         createProgressReportData: {
            reportId,
            detail,
            medias,
         },
      },
   });
   return data?.createProgressReport?.progresses;
};
