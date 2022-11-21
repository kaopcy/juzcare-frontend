import Layout from '@/layouts/index';
//sections
import CreateReportForm from '@/sections/report/createReport/CreateReportForm';

// components
import UserProfileIcon from '@/components/UserProfileIcon';

const CreateReport = () => (
   <div className="flex items-center justify-center w-full h-full px-4 space-x-20 md:px-10 ">
      <div className="flex flex-col items-start justify-center w-full -mt-navbar gap-x-20 md:flex-row">
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
