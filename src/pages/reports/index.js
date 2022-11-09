import PropTypes from 'prop-types';
import Layout from '@/layouts/index';
// components
import ReportPost from '@/components/commons/ReportPost';
// sections
import ReportsTypesSelector from '@/sections/reports/ReportsTypesSelector';
import ReportsOptions from '@/sections/reports/ReportsOptions';
// services
import { getPosts } from '@/services/reports.service';

Reports.propTypes = {
   reports: PropTypes.object,
};

function Reports({ reports }) {
   return (
      <section className="relative flex  w-full justify-center">
         <div className="mx-[10%] flex w-full  max-w-[700px] flex-col gap-y-10 py-12">
            <ReportsTypesSelector />
            {reports.map((report) => (
               <ReportPost key={report._id} report={report} />
            ))}
         </div>
         <ReportsOptions />
      </section>
   );
}

export const getServerSideProps = async () => {
   const reports = await getPosts({
      sort: 'something',
   });
   return {
      props: {
         ...reports,
      },
   };
};

Reports.getLayout = (page) => (
   <Layout title="กระทู้" variant="unprotected">
      {page}
   </Layout>
);

export default Reports;
