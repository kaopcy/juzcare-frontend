import { GetPopularTagGQL, GetReportsGQL, GetReportGQL } from '@/graphql/report.gql';
import client from '@/graphql/apollo-client';


export const getTags = async ({ tagsQuery }) => {
   const { data } = await client.query({
      query: GetPopularTagGQL,
      variables: {
         tagsQuery,
      },
   });
   return data.getPopularTags;
};

export const getReports = async ({ sort = '', order = '', filter = '', activeTags = '', page }) => {
   console.log('getREports called');
   const { data } = await client.query({
      query: GetReportsGQL,
      fetchPolicy: 'no-cache',
      variables: {
         sort,
         filter: [],
         order,
         tags: activeTags.map((tag) => tag.name),
         page: parseInt(page),
         pageAmount: 4,
      },
   });

   return data.reports;
};

export const getReport = async ({ _id }) => {
   const { data } = await client.query({
      query: GetReportGQL,
      fetchPolicy: 'no-cache',
      variables: { _id },
   });
   return data.report;
};
