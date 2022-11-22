import React from 'react';
import PropTypes from 'prop-types';
import { COMPLETE, INPROGRESS, UNVERIFIED, VERIFIED } from '@/configs/reportConfig/reportStatus.config';

// sections
import AdminReportStatusVerifyButton from './AdminReportStatusVerifyButton';
import AdminReportStatusRejectButton from './AdminReportStatusRejectButton';
import AdminReportStatusFinishedButton from './AdminReportStatusFinishedButton';
import AdminReportStatusAcceptButton from './AdminReportStatusAcceptButton';

function AdminReportStatusControl({ report }) {
   switch (report.status.type) {
      case UNVERIFIED:
         return (
            <div className="flex items-center justify-center gap-x-2">
               <AdminReportStatusVerifyButton report={report} />
               <AdminReportStatusRejectButton report={report} />
            </div>
         );
      case VERIFIED:
         return (
            <div className="flex items-center justify-center">
               <AdminReportStatusAcceptButton report={report} />
            </div>
         );
      case INPROGRESS:
         return (
            <div className="flex items-center justify-center">
               <AdminReportStatusFinishedButton report={report} />
            </div>
         );
      case COMPLETE:
         return <div className="mx-auto">-</div>;
      default:
         return <div className="mx-auto">-</div>;
   }
}

AdminReportStatusControl.propTypes = {
   report: PropTypes.object,
};

export default AdminReportStatusControl;
