import React from 'react';
import PropTypes from 'prop-types';

import { finishReport } from '@/redux/admin/admin-reports.slice';
import { useDispatch } from '@/redux/store';

AdminReportStatusFinishedButton.propTypes = {
   report: PropTypes.object,
};

function AdminReportStatusFinishedButton({ report }) {
   const dispatch = useDispatch();

   const onFinish = () => {
      dispatch(finishReport({ reportId: report._id }));
   };
   return (
      <button
         type="button"
         onClick={onFinish}
         className="rounded-lg hover:bg-green-800 bg-green-600 px-2 py-0.5 text-sm font-medium text-paper whitespace-nowrap"
      >
         เสร็จสิ้น
      </button>
   );
}

export default AdminReportStatusFinishedButton;
