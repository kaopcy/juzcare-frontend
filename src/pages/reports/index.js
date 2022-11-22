import Layout from '@/layouts/index';
import PropTypes from 'prop-types';
// components
// sections
import ReportsList from '@/sections/reports/ReportsList';
import ReportsOptions from '@/sections/reports/ReportsOptions';
import ReportsPersuade from '@/sections/reports/ReportsPersuade';
import ReportsTypesSelector from '@/sections/reports/ReportsTypesSelector';
import ReportsFetchObserver from '@/sections/reports/ReportsFetchObserver';
// hooks
import useSearchQuery from '@/hooks/useSearchQuery';
import { useEffectOnce } from 'react-use';
import { useEffect } from 'react';
// stores
import { useDispatch } from '@/redux/store';
import { fetchTag, toggleOrder, updateActiveTags, updateFilter, updateSort } from '@/slices/reportOptions';
import { fetchReports } from '@/slices/reports';
// init swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

Reports.propTypes = {
   filter: PropTypes.string,
   order: PropTypes.string,
   sort: PropTypes.string,
   tags: PropTypes.array,
};

function Reports({ filter, order, sort, tags }) {
   // init reports and tags
   const dispatch = useDispatch();
   const { getCurrentSearchQuery } = useSearchQuery();
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, [getCurrentSearchQuery]);

   useEffectOnce(() => {
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
   });

   useEffect(() => {
      dispatch(fetchReports());
      dispatch(fetchTag({ tagsQuery: '' }));
   }, [dispatch]);

   return (
      <section className="relative flex w-full justify-center">
         <div className="mx-0 flex w-full max-w-[700px] flex-col gap-y-10  px-4 md:mx-[10%] md:px-0 ">
            <ReportsTypesSelector />
            <ReportsList />
            <ReportsFetchObserver />
            <ReportsPersuade />
         </div>
         <ReportsOptions />
      </section>
   );
}

export const getServerSideProps = async (context) => {
   const { query } = context;
   const searchQuery = {
      tags: query.tag ? query.tag.split(',').map((e) => ({ name: e })) : null,
      sort: query.sort ?? null,
      order: query.order ?? null,
      filter: query.filter ?? null,
   };
   return {
      props: {
         ...searchQuery,
      },
   };
};

Reports.getLayout = (page) => (
   <Layout title="กระทู้" variant="unprotected">
      {page}
   </Layout>
);

export default Reports;
