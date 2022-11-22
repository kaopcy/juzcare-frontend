import React from 'react';
import PropTypes from 'prop-types';

import { acceptReport } from '@/redux/admin/admin-reports.slice';
import { useDispatch } from '@/redux/store';

AdminReportStatusAcceptButton.propTypes = {
   report: PropTypes.object,
};

function AdminReportStatusAcceptButton({ report }) {
   const dispatch = useDispatch();
   const onAccept = () => {
      dispatch(acceptReport({ reportId: report._id }));
   };
   return (
      <button
         type="button"
         onClick={onAccept}
         className="rounded-lg bg-green-600 px-2 py-0.5 text-sm font-medium text-paper hover:bg-green-800"
      >
         รับเรื่อง
      </button>
   );
}

export default AdminReportStatusAcceptButton;
