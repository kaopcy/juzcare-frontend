// import { gql } from '@apollo/client'
import client from '@/graphql/apollo-client';
import { delay } from '@/utils/delay';

import { CreateReportGQL } from '@/graphql/report.gql';

export const createReport = async ({ title, detail, locationDetail, location, tags, medias }) => {
   console.log(
      'title',
      title,
      'detail',
      detail,
      'locationDetail',
      locationDetail,
      'location',
      location,
      'tags',
      tags,
      'medias',
      medias,
   );
   const { data, errors } = await client.mutate({
      mutation: CreateReportGQL,
      variables: {
         createReportData: {
            title,
            detail,
            locationDetail,
            location,
            tags,
            medias,
         },
      },
   });

   return data.createReport;
};
