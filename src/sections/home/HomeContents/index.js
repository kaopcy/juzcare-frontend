// components
import HomeContent from './HomeContent';
import HomeContentProgressBar from './HomeContentProgressBar';
// contexts
import { useReports } from '@/contexts/Home/ReportsContext';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';

const SLIDER_AUTOSCROLL_TIMEOUT = 3500;

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

   const autoScrollTimeout = useRef();
   // autoscroll
   useEffect(() => {
      if (!autoScrollTimeout.current) {
         autoScrollTimeout.current = setTimeout(() => {
            setCurrentReport((old) => (old + 1) % reports.length);
         }, SLIDER_AUTOSCROLL_TIMEOUT);
      }

      return () => clearTimeoutRef(autoScrollTimeout);
   }, [reports, currentReport]);

   return (
      <section className="relative w-full">
         <div ref={sliderRef} className=" mb-16 w-full overflow-hidden">
            <div className=" flex">
               {reports.map((report, index) => (
                  <HomeContent report={report} key={report.id} active={currentReport === index} />
               ))}
            </div>
         </div>
         <button
            onClick={() => setCurrentReport((old) => (old - 1 < 0 ? reports.length - 1 : (old - 1) % reports.length))}
            className="group absolute bottom-0 right-full w-20 translate-x-full -translate-y-1/2 "
         >
            <Icon
               className=" mr-auto h-5 w-5 text-text-light/70 group-hover:text-text"
               icon="akar-icons:chevron-left"
            />
         </button>

         <button
            onClick={() => setCurrentReport((old) => (old + 1) % reports.length)}
            className="group absolute bottom-0 left-full w-20 -translate-x-full -translate-y-1/2"
         >
            <Icon
               className=" ml-auto h-5 w-5 text-text-light/70 group-hover:text-text"
               icon="akar-icons:chevron-right"
            />
         </button>
         <HomeContentProgressBar currentReport={currentReport} reportLength={reports.length} />
      </section>
   );
}

export default HomeContents;