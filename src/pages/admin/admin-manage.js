import Layout from '@/layouts/index';

function AdminManage() {
   return <div className="min-h-screen w-full">awdwad ths is admin</div>;
}

AdminManage.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export default AdminManage;
