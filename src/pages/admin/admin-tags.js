import PropTypes from 'prop-types';
import { useMemo } from 'react';
// layout
import Layout from '@/layouts/index';
// stores
import { useSelector } from '@/redux/store';
// services
import { getAllTags } from '@/services/admin.service';
// utils
import { getStatusTHLabel, UNVERIFIED, VERIFIED } from '@/configs/reportConfig/reportStatus.config';
import AdminTagStatusControl from '@/sections/admin/AdminTagsStatusControl';

AdminTags.propTypes = {
   tags: PropTypes.array,
};

function AdminTags({ tags: initTags }) {
   const { tags: storeTags, error } = useSelector((state) => state.adminTags);

   const classifiedTags = useMemo(
      () =>
         (storeTags ?? initTags).reduce((acc, cur) => {
            if (!acc[cur.status]) return { ...acc, [cur.status]: [cur] };
            if (acc[cur.status]) return { ...acc, [cur.status]: [...acc[cur.status], cur] };
            return {};
         }, {}),
      [initTags, storeTags],
   );

   return (
      <div className="py-10">
         <div className="flex flex-col items-start gap-y-7 border bg-[#FBFBFB] py-10  px-6">
            <div className="mb-2 text-lg font-bold">
               {getStatusTHLabel(UNVERIFIED)} - {classifiedTags[UNVERIFIED].length}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
               {classifiedTags[UNVERIFIED].map((tag) => (
                  <AdminTagStatusControl key={tag._id} tag={tag} type={UNVERIFIED} />
               ))}
            </div>
            <div className="mb-2 text-lg font-bold">
               {getStatusTHLabel(VERIFIED)} - {classifiedTags[VERIFIED].length}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-2">
               {classifiedTags[VERIFIED].map((tag) => (
                  <AdminTagStatusControl key={tag._id} tag={tag} type={VERIFIED} />
               ))}
            </div>
         </div>
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
