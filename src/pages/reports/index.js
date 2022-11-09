import Layout from '@/layouts/index';
// components
import ReportPost from '@/components/commons/ReportPost';
// sections
import ReportsTypesSelector from '@/sections/reports/ReportsTypesSelector';

function Reports() {
   return (
      <section className="flex w-full flex-col items-center ">
         <div className="flex w-full max-w-[700px] flex-col gap-y-10 py-12">
            <ReportsTypesSelector />
            <ReportPost />
            <ReportPost />
            <ReportPost />
            <ReportPost />
         </div>
      </section>
   );
}

export const getServersideProps =  async ()=>{
   return {
      props: {
         
      }
   }
}

Reports.getLayout = (page) => (
   <Layout title="กระทู้" variant="unprotected">
      {page}
   </Layout>
);

export default Reports;
