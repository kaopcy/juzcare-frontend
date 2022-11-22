import { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
// stores
import { useDispatch, useSelector } from '@/redux/store';
import { fetchMoreReports } from '@/slices/reports';

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
         {isLoading && <h1>กำลังโหลด</h1>}
      </div>
   );
}

export default ReportsFetchObserver;
