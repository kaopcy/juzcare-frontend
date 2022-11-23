import Layout from '@/layouts/index';

function AdminManage() {
   return (
      <div className="py-10">
         <div className="flex flex-col items-start gap-y-7 border bg-[#FBFBFB] py-10  px-6">
            <div className="flex items-start">
               awdawd
            </div>
         </div>
      </div>
   );
}

export const getServerSideProps = async () => {
   // const reports = await getAllReports();
   return {
      props: {
         // reports,
      },
   };
};

AdminManage.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export default AdminManage;
