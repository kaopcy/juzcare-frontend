import PropTypes from 'prop-types';
import { useMemo, useCallback } from 'react';

import { statusRadios } from '@/configs/reportConfig/reportStatus.config';
import { classname } from '@/utils/getClassName';

ReportStatusTimeline.propTypes = {
   reportStatus: PropTypes.object,
};

function ReportStatusTimeline({ reportStatus }) {
   const currentStatusNumber = useMemo(
      () => statusRadios.find((e) => e.value === reportStatus.type)?.valueNumber,
      [reportStatus],
   );

   const isPassedStatus = useCallback((index) => currentStatusNumber > index, [currentStatusNumber]);

   return (
      <div className="relative mx-auto mb-20 flex h-[3px] w-full max-w-[500px] items-center justify-between bg-text-light/30">
         {statusRadios.map((e, index) => (
            <div
               key={e._id}
               className={classname(
                  'relative h-5 w-5 shrink-0 rounded-full ',
                  isPassedStatus(index) ? 'bg-primary-dark' : 'bg-text-lighter',
               )}
            >
               <div
                  className={classname(
                     'absolute bottom-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap ',
                     isPassedStatus(index) ? 'text-primary-dark' : 'text-light',
                  )}
               >
                  {e.label}
               </div>
            </div>
         ))}
      </div>
   );
}

export default ReportStatusTimeline;
