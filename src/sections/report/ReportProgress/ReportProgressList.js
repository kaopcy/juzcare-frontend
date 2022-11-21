import PropTypes from 'prop-types';
import React from 'react';
import useReport from '@/hooks/useReport';

ReportProgressList.propTypes = {};

function ReportProgressList() {
   const { report } = useReport();
   console.log(report?.progresses);
   return (
      <div className="flex w-full flex-col ">
         {report?.progresses.map((progress) => (
            <div key={progress._id} className="">
               {progress.detail}
            </div>
         ))}
      </div>
   );
}

export default ReportProgressList;
