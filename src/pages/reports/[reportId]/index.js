import PropTypes from 'prop-types';
import Layout from '@/layouts/index';
import { getReport } from '@/services/reports.service';
// context
import { ReportContextProvider } from '@/contexts/ReportContext';
import ReportPost from '@/sections/report/ReportPost';
import ReportStatusTimeline from '@/sections/report/ReportStatusTimeline';
import ReportComment from '@/sections/report/ReportComment';
// init swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ReportProgress from '@/sections/report/ReportProgress';

ReportId.propTypes = {
   report: PropTypes.object,
};

function ReportId({ report }) {
   return (
      <ReportContextProvider initReport={report}>
         <div className="mx-auto flex max-w-[700px] flex-col py-20 px-7 md:px-0">
            <ReportStatusTimeline reportStatus={report.status} />
            <div className="flex w-full flex-col">
               <ReportPost />
            </div>
            <ReportComment />
            <ReportProgress />
         </div>
      </ReportContextProvider>
   );
}

ReportId.getLayout = (page) => (
   <Layout title="รีพอร์ต" variant="unprotected">
      {page}
   </Layout>
);

export const getServerSideProps = async (ctx) => {
   const { reportId } = ctx.params;
   try {
      const report = await getReport({ _id: reportId });
      return {
         props: {
            report,
         },
      };
   } catch (error) {
      return {
         notFound: true,
      };
   }
};

export default ReportId;
