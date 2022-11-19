import PropTypes from 'prop-types';
import Layout from '@/layouts/index';
// components
import ReportPost from '@/components/commons/ReportPost';
// sections
import ReportsTypesSelector from '@/sections/reports/ReportsTypesSelector';
import ReportsOptions from '@/sections/reports/ReportsOptions';
import ReportsPersuade from '@/sections/reports/ReportsPersuade';
// hooks
import useSearchQuery from '@/hooks/useSearchQuery';
import { useEffectOnce } from 'react-use';
// services
import { getReports, getTags } from '@/services/reports.service';
import { useEffect } from 'react';
// stores
import { dispatch } from '@/redux/store';
import {
   fetchTagSucceed,
   fetchTagFail,
   updateActiveTags,
   updateFilter,
   updateSort,
   toggleOrder,
} from '@/slices/reportOptions';

Reports.propTypes = {
   reports: PropTypes.array,
   tags: PropTypes.array,
};

function Reports({ reports, tags: initialTags }) {
   useEffect(() => {
      if (initialTags) dispatch(fetchTagSucceed({ tags: initialTags }));
      dispatch(fetchTagFail({ error: 'fetch tag failed' }));
   }, [initialTags]);

   const { getCurrentSearchQuery } = useSearchQuery();
   useEffectOnce(() => {
      const { filter, order, sort, tags } = getCurrentSearchQuery();
      if (tags) {
         dispatch(updateActiveTags({ activeTags: tags }));
      }
      if (order) {
         dispatch(toggleOrder({ order }));
      }
      if (filter) {
         dispatch(updateFilter({ filter }));
      }
      if (sort) {
         dispatch(updateSort({ sort }));
      }
      console.log(filter, order, sort, tags);
   });

   return (
      <section className="relative flex w-full justify-center">
         <div className="mx-[10%] flex w-full  max-w-[700px] flex-col gap-y-10 ">
            <ReportsTypesSelector />
            {reports.map((report) => (
               <ReportPost key={report._id} report={report} />
            ))}
            <ReportsPersuade />
         </div>
         <ReportsOptions />
      </section>
   );
}

export const getServerSideProps = async () => {
   const reports = await getReports({ sort: 'something' });
   const tags = await getTags();

   return {
      props: {
         ...reports,
         tags,
      },
   };
};

Reports.getLayout = (page) => (
   <Layout title="กระทู้" variant="unprotected">
      {page}
   </Layout>
);

export default Reports;
