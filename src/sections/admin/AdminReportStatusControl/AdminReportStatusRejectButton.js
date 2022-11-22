import PropTypes from 'prop-types';
import React from 'react';
// components
import Icon from '@/components/Icon';

import { rejectReport } from '@/redux/admin/admin-reports.slice';
import { useDispatch } from '@/redux/store';

AdminReportStatusRejectButton.propTypes = {
   report: PropTypes.object,
};

function AdminReportStatusRejectButton({ report }) {
   const dispatch = useDispatch();

   const onReject = () => {
      dispatch(rejectReport({ reportId: report._id }));
   };
   return (
      <button
         type="button"
         onClick={onReject}
         className="rounded-lg bg-text px-1 py-1.5 text-sm font-bold text-error hover:text-red-600"
      >
         <Icon icon="ic:twotone-close" />
      </button>
   );
}

export default AdminReportStatusRejectButton;
