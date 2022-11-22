import { AnimatePresence, motion } from 'framer-motion';
// stores
import { useSelector } from '@/redux/store';
// components
import ReportListPost from '@/sections/reports/ReportListPost';
import Loader from '@/svg/Loader';
import { useEffect } from 'react';
import Icon from '@/components/Icon';

function ReportsList() {
   const { isLoading, reports, error } = useSelector((state) => state.reports);
   return (
      <div className="flex w-full flex-col gap-y-10">
         <AnimatePresence>
            {isLoading && (
               <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="fixed left-[40%] h-1/6 w-16 "
               >
                  <Loader className=" h-12 w-12" />
               </motion.div>
            )}
         </AnimatePresence>
         {reports?.map((report , index) => (
            <ReportListPost index={index} key={report._id} report={report} />
         ))}
         {reports?.length === 0 && !isLoading && (
            <div className="flex w-full justify-center items-center gap-x-2">
               <Icon className="h-8 w-8" icon="fluent:slide-search-20-regular" />
               <h2 className="">ไม่พบกระทู้ที่ค้นหา</h2>
            </div>
         )}
      </div>
   );
}

export default ReportsList;
