import React from 'react';
import Layout from '@/layouts/index';
import Icon from '@/components/Icon';

import { useQuery } from '@apollo/client';
import { FindReportsByUserIdGQL } from '@/graphql/user.gql';
import HistoryReportPost from '@/sections/user/history/HistoryReportPost';
import { useMemo } from 'react';

const History = () => {
   const { data, loading, error } = useQuery(FindReportsByUserIdGQL);
   const reports = useMemo(() => data?.findReportsByUserId, [data]);
   return (
      <section className="relative flex min-h-[80vh] w-full max-w-[600px]  flex-col items-center rounded-md border py-4 px-4 shadow-md">
         {(loading || reports.length === 0)  ? (
            <h4 className="mx-auto mt-10">ยังไม่มีกระทู้</h4>
         ) : (
            data?.findReportsByUserId.map((report) => <HistoryReportPost key={report._id} report={report} />)
         )}
      </section>
   );
};
History.getLayout = (children) => (
   <Layout title="ประวัติ" variant="user">
      {children}
   </Layout>
);
export default History;
