import Layout from '@/layouts/index';
//sections
import CreateReportForm from '@/sections/report/createReport/CreateReportForm';

// components
import UserProfileIcon from '@/components/UserProfileIcon';

const CreateReport = () => (
   <div className="flex h-full w-full items-center justify-center space-x-20 ">
      <div className="flex items-start gap-x-20">
         <UserProfileIcon className="h-[calc(35vh-64px)]" />
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
