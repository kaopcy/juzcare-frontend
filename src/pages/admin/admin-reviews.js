import Layout from '@/layouts/index';

function AdminReviews() {
   return <div className="min-h-screen w-full">this is admin reviews</div>;
}

AdminReviews.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export default AdminReviews;
