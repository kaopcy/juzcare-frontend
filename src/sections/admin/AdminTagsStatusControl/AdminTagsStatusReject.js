import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon';

import { rejectTag } from '@/redux/admin/admin-tags.slice';
import { useDispatch } from '@/redux/store';

AdminTagsStatusReject.propTypes = {
   tag: PropTypes.object,
};

function AdminTagsStatusReject({ tag }) {
   const dispatch = useDispatch();

   const onReject = () => {
      dispatch(rejectTag({ _id: tag._id }));
   };

   return (
      <button onClick={onReject} className="">
         <span className="text-sm font-normal text-red-500 underline hover:text-red-600">ยกเลิก</span>
      </button>
   );
}

export default AdminTagsStatusReject;
