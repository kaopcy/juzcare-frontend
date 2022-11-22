import PropTypes from 'prop-types';
import React from 'react';
import useReport from '@/hooks/useReport';
import ReportProgressPost from './ReportProgressPost';

import Moment from 'react-moment';
import 'moment/locale/th';
import Icon from '@/components/Icon';

ReportProgressList.propTypes = {};

function ReportProgressList() {
   const { report } = useReport();
   return (
      <div className="relative flex min-h-0 w-full items-stretch py-10 ">
         <div className="relative w-10 shrink-0 border-l-2 border-dashed">
            <div className="absolute bottom-0 -left-1 h-9 w-2 bg-paper"> </div>
         </div>
         <div className="flex w-full min-w-0  flex-col gap-y-20 py-10 ">
            {report?.progresses.map((progress) => (
               <div className="relative w-full" key={progress._id}>
                  <div className="absolute -top-[3rem] -left-[3.7rem] flex  items-center  text-xl">
                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">
                        <Icon icon="material-symbols:check-circle-outline" />
                     </div>
                     <span locale="th" className=" whitespace-nowrap pl-6 text-base font-bold text-text">
                        {new Date(progress.createdAt).toLocaleDateString('th-TH', {
                           year: 'numeric',
                           month: 'long',
                           day: 'numeric',
                        })}
                     </span>
                     <span locale="th" className=" whitespace-nowrap pl-7 text-base font-bold text-text">
                        เวลา
                     </span>

                     <span locale="th" className=" whitespace-nowrap pl-1 text-base font-bold text-text">
                        {new Date(progress.createdAt).toLocaleTimeString('th-TH', {
                           timeStyle: 'short',
                        })}
                     </span>
                  </div>
                  <ReportProgressPost progress={progress} />
               </div>
            ))}
         </div>
      </div>
   );
}

export default ReportProgressList;
