// components
import HomeContent from './HomeContent';
import HomeContentProgressBar from './HomeContentProgressBar';
// contexts
import { useReports } from '@/contexts/Home/ReportsContext';
import { memo, useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import Link from '@/components/Link';

const SLIDER_AUTOSCROLL_TIMEOUT = 3000;

function HomeContents() {
   const { reports } = useReports();
   const [currentReport, setCurrentReport] = useState(0);

   const sliderRef = useRef();
   const scrollTimeout = useRef();

   const clearTimeoutRef = (timeout) => {
      if (!timeout?.current) return;
      clearTimeout(timeout.current);
      timeout.current = null;
   };

   // slider
   useEffect(() => {
      const { current: sliderEl } = sliderRef;
      const scrollAmount = sliderEl.clientWidth * currentReport;

      sliderEl.scrollTo({
         top: 0,
         left: Math.max(scrollAmount),
         behavior: 'smooth',
      });

      const scrollEvent = () => {
         if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
         scrollTimeout.current = setTimeout(() => {
            sliderEl.scrollTo({
               top: 0,
               left: Math.max(scrollAmount),
               behavior: 'smooth',
            });
            clearTimeoutRef(scrollTimeout);
         }, 200);
      };
      sliderEl.addEventListener('scroll', scrollEvent, { passive: true });

      return () => {
         sliderEl.removeEventListener('scroll', scrollEvent);
         clearTimeoutRef(scrollTimeout);
      };
   }, [currentReport, reports]);

   // autoscroll
   const autoScrollTimeout = useRef();
   useEffect(() => {
      const { current: sliderEl } = sliderRef;

      const mouseOutEvent = () => {
         if (!autoScrollTimeout.current) {
            autoScrollTimeout.current = setTimeout(() => {
               setCurrentReport((old) => (old + 1) % reports.length);
            }, SLIDER_AUTOSCROLL_TIMEOUT);
         }
      };

      const mouseInEvent = () => {
         clearTimeoutRef(autoScrollTimeout);
      };

      mouseOutEvent();

      sliderEl.addEventListener('mouseleave', mouseOutEvent, { passive: true });
      sliderEl.addEventListener('mouseenter', mouseInEvent, { passive: true });

      return () => {
         sliderEl.removeEventListener('mouseenter', mouseInEvent);
         sliderEl.removeEventListener('mouseleave', mouseOutEvent);
         clearTimeoutRef(autoScrollTimeout);
      };
   }, [reports, currentReport]);

   return (
         <section className="relative w-full">
            <div ref={sliderRef} className=" mb-16 w-full overflow-hidden">
               <div className=" flex">
                  {reports?.map((report, index) => (
                     <HomeContent report={report} key={report._id} active={currentReport === index} />
                  ))}
               </div>
            </div>
            <button
               onClick={() =>
                  setCurrentReport((old) => (old - 1 < 0 ? reports?.length - 1 : (old - 1) % reports.length))
               }
               className="group absolute bottom-0 right-full w-1/2  translate-x-full -translate-y-1/2 "
            >
               <Icon
                  className=" mr-auto h-5 w-5 text-text-light/70 group-hover:text-text"
                  icon="akar-icons:chevron-left"
               />
            </button>

            <button
               onClick={() => setCurrentReport((old) => (old + 1) % reports?.length)}
               className="group absolute bottom-0 left-full w-1/2 -translate-x-full -translate-y-1/2"
            >
               <Icon
                  className=" ml-auto h-5 w-5 text-text-light/70 group-hover:text-text"
                  icon="akar-icons:chevron-right"
               />
            </button>
            <HomeContentProgressBar currentReport={currentReport} reportLength={reports?.length} />
         </section>
   );
}

export default memo(HomeContents);
