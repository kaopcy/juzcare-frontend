import PropTypes from 'prop-types';
import { useMemo } from 'react';
// layout
import Layout from '@/layouts/index';
// stores
import { useSelector } from '@/redux/store';
// services
import { getAllTags } from '@/services/admin.service';

AdminTags.propTypes = {
   tags: PropTypes.array,
};

function AdminTags({ tags: initTags }) {
   const { tags: storeTags, error } = useSelector((state) => state.adminTags);

   const tags = useMemo(() => storeTags ?? initTags, [initTags, storeTags]);

   

   return (
      <div className="min-h-screen w-full grid gap-3 grid-cols-4">
         {tags.map((tag) => (
            <div key={tag._id} className="h-20 w-full border">
               {tag.name}
            </div>
         ))}
      </div>
   );
}

AdminTags.getLayout = (page) => (
   <Layout title="จัดการผู้ใช้" variant="admin">
      {page}
   </Layout>
);

export default AdminTags;

export const getServerSideProps = async () => {
   const tags = await getAllTags();
   return {
      props: {
         tags,
      },
   };
};
