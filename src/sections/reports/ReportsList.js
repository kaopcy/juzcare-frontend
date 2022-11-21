import { AnimatePresence, motion } from 'framer-motion';
// stores
import { useSelector } from '@/redux/store';
// components
import ReportPost from '@/components/commons/ReportPost';
import Loader from '@/svg/Loader';
import { useEffect } from 'react';

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
         {reports?.map((report) => (
            <ReportPost key={report._id} report={report} />
         ))}
         {reports?.length === 0 && !isLoading && <h2 className='mx-auto'>ไม่พบกระทู้ที่ค้นหา</h2>}
      </div>
   );
}

export default ReportsList;
