import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon';

import { acceptTag } from '@/redux/admin/admin-tags.slice';
import { useDispatch } from '@/redux/store';

AdminTagsStatusAccept.propTypes = {
   tag: PropTypes.object,
};

function AdminTagsStatusAccept({ tag }) {
   const dispatch = useDispatch();
   
   const onAccept = () => {
      dispatch(acceptTag({ _id: tag._id }));
   };

   return (
      <button onClick={onAccept} className="">
         <Icon className="text-green-500" icon="material-symbols:check-circle-rounded" />
      </button>
   );
}

export default AdminTagsStatusAccept;
