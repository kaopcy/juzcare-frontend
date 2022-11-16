import Layout from '@/layouts/index';
//sections
import CreateReportForm from '@/sections/report/createReport/CreateReportForm';

// components
import UserProfileIcon from '@/components/UserProfileIcon';

const CreateReport = () => (
   <div className="flex  h-full w-full items-center justify-center space-x-20 px-4 md:px-10 ">
      <div className="flex w-full flex-col items-start justify-center gap-x-20 md:flex-row">
         <UserProfileIcon className="mx-auto mb-10 h-[calc(20vh)] md:mx-0 md:mb-0  md:h-[calc(35vh-64px)]" />
         <CreateReportForm />
      </div>
   </div>
);

CreateReport.getLayout = (page) => (
   <Layout variant="protected" title="สร้างโพสต์">
      {page}
   </Layout>
);

export default CreateReport;
