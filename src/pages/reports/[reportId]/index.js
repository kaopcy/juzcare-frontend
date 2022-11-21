import PropTypes from 'prop-types';
import Layout from '@/layouts/index';
import { getReport } from '@/services/reports.service';

import ReportPost from '@/components/commons/ReportPost';
import ReportStatusTimeline from '@/sections/report/ReportStatusTimeline';
// init swiper
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

ReportId.propTypes = {
   report: PropTypes.object,
};

function ReportId({ report }) {
   return (
      <div className="mx-auto flex max-w-[700px] flex-col py-20">
         <ReportStatusTimeline reportStatus={report.status} />
         <ReportPost report={report} />
      </div>
   );
}

ReportId.getLayout = (page) => (
   <Layout title="รีพอร์ต" variant="unprotected">
      {page}
   </Layout>
);

export const getServerSideProps = async (ctx) => {
   const { reportId } = ctx.params;
   console.log(reportId);
   try {
      const report = await getReport({ _id: reportId });
      console.log(report);
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
