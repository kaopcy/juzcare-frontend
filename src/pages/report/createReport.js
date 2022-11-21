import Layout from '@/layouts/index';
//sections
import CreateReportForm from '@/sections/report/createReport/CreateReportForm';

// components
import UserProfileIcon from '@/components/UserProfileIcon';

const CreateReport = () => (
   <div className="flex  min-h-screen w-full items-center justify-center space-x-20 px-4 md:px-10 ">

      <div className="-mt-navbar flex w-full flex-col items-start justify-center gap-x-20 md:flex-row">
         <div className="relative mx-auto md:mt-20  mb-10 aspect-square  h-[calc(20vh)] rounded-full  border-2 border-dashed p-1 md:mx-0 md:mb-0 md:h-[calc(35vh-64px)]">
            <UserProfileIcon className="absolute top-1/2 left-1/2 h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2" />
         </div>
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
