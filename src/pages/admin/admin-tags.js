import Layout from '@/layouts/index';

function AdminTags() {
   return <div className="min-h-screen w-full">this is admin-tags</div>;
}

AdminTags.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export default AdminTags;
