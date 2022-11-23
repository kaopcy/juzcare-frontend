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
   const { data } = await client.query({
      query: GetReportsGQL,
      fetchPolicy: 'no-cache',
      variables: {
         sort,
         filter: filter.length === 0 ? [] : [filter],
         order,
         tags: activeTags.map((tag) => tag.name),
         page: parseInt(page),
         pageAmount: 4,
      },
   });

   return data.reports;
};

export const getHomePage = async () => {
   const { data } = await client.query({
      query: GetReportsGQL,
      fetchPolicy: 'no-cache',
      variables: {
         sort: 'SORT_BY_LIKE',
         filter: [],
         order: 'DESCENDING',
         tags: [],
         page: 0,
         pageAmount: 5,
      },
   });

   return data.reports.reports;
};

export const getReport = async ({ _id }) => {
   const { data } = await client.query({
      query: GetReportGQL,
      fetchPolicy: 'no-cache',
      variables: { _id },
   });
   return data.report;
};
