import client from '@/graphql/apollo-client';
import { CreateCommentReportGQL } from '@/graphql/comment.gql'

export const createCommentReport = async ({ reportId , body}) => {
   const { data } = await client.mutate({
      mutation: CreateCommentReportGQL,
      variables: {
         createCommentReportData: {
            reportId,
            body
         },
      },
   });
   console.log(data.createCommentReport)
   return data.createCommentReport;
};