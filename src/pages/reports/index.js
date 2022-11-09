import Layout from '@/layouts/index';
// components
import ReportPost from '@/components/commons/ReportPost';
// sections
import ReportsTypesSelector from '@/sections/reports/ReportsTypesSelector';
import ReportsOptions from '@/sections/reports/ReportsOptions';

function Reports() {
   return (
      <section className="relative flex  w-full justify-center">
         <div className="flex w-full mx-[10%]  max-w-[700px] flex-col gap-y-10 py-12">
            <ReportsTypesSelector />
            <ReportPost />
            <ReportPost />
            <ReportPost />
            <ReportPost />
         </div>
         <ReportsOptions />
      </section>
   );
}

export const getServersideProps = async () => {
   return {
      props: {},
   };
};

Reports.getLayout = (page) => (
   <Layout title="กระทู้" variant="unprotected">
      {page}
   </Layout>
);

export default Reports;
