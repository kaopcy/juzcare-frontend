import PropTypes from 'prop-types';

import AdminTagsStatusAccept from './AdminTagsStatusAccept';
import { UNVERIFIED } from '@/configs/reportConfig/reportStatus.config';
import AdminTagsStatusReject from './AdminTagsStatusReject';
import { useSelector } from '@/redux/store';
import Loader from '@/svg/Loader';

AdminTagStatusControl.propTypes = {
   tag: PropTypes.object,
   type: PropTypes.string,
};

function AdminTagStatusControl({ tag, type }) {
   const { isLoading } = useSelector((state) => state.adminTags);
   return (
      <div className="flex  items-center gap-x-4 rounded-lg border bg-paper py-2 px-4">
         <span>{tag.name}</span>
         <div className="flex items-center">
            {isLoading ? (
               <Loader className="h-4 w-4" />
            ) : type === UNVERIFIED ? (
               <AdminTagsStatusAccept tag={tag} />
            ) : (
               <AdminTagsStatusReject tag={tag} />
            )}
            {}
         </div>
      </div>
   );
}

export default AdminTagStatusControl;
