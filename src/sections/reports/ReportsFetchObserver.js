import { motion, AnimatePresence } from 'framer-motion';

import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
// stores
import { useDispatch, useSelector } from '@/redux/store';
import { fetchMoreReports } from '@/slices/reports';
import Loader from '@/svg/Loader';

function ReportsFetchObserver() {
   const dispatch = useDispatch();
   const { isLoading } = useSelector((state) => state.reports);

   const observerRef = useRef(null);
   const intersection = useIntersection(observerRef, {
      root: null,
      rootMargin: '200px',
      threshold: 1,
   });

   useEffect(() => {
      if (intersection && intersection.intersectionRatio >= 1) {
         dispatch(fetchMoreReports());
      }
   }, [intersection, dispatch]);

   return (
      <div ref={observerRef} className="flex h-20 w-full flex-col items-center justify-center">
         {/* <AnimatePresence>
            {isLoading && (
               <motion.div
                  className="flex items-center gap-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
               >
                  <h1>กำลังโหลด</h1>
                  <Loader className="h-12 w-12" />
               </motion.div>
            )}
         </AnimatePresence> */}
      </div>
   );
}

export default ReportsFetchObserver;
