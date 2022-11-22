import ReportOptionsSearchBar from './ReportOptionsSearchBar';
import ReportOptionsFilter from './ReportOptionsFilter';
import ReportOptionsTagSelector from './ReportOptionsTagSelector';
import ReportOptionsSort from './ReportOptionsSort';
import { useEffect, useRef } from 'react';

function ReportsOptions() {
   const sidebarRef = useRef(null);
   const sidebarBlockRef = useRef(null);

   useEffect(() => {
      const { current: sidebarEl } = sidebarRef;
      const { current: sidebarBlockEl } = sidebarBlockRef;
      let prevScroll;
      let position = -1;

      let gapTop = 0;
      let gapBot = sidebarEl.clientHeight;

      let prevCombineGap = '';
      const combileGap = () => `${gapTop.toFixed(0)}${gapBot.toFixed(0)}`;

      const trigger = (callback) => {
         if (prevCombineGap !== combileGap()) {
            callback();
            prevCombineGap = combileGap();
         }
      };

      const scrollEvent = () => {
         const sidebarHeight = sidebarEl.clientHeight;
         const screenHeight = window.innerHeight;

         if (!prevScroll) return (prevScroll = window.scrollY);
         if (prevScroll <= window.scrollY) {
            gapBot = Math.max(window.scrollY + screenHeight, gapBot);
            gapTop = Math.max(window.scrollY + screenHeight - sidebarHeight, gapTop);

            // เลื่อนลง
            if (position == -1) {
               trigger(() => {
                  sidebarBlockEl.style.marginTop = `${window.scrollY}px`;
               });
               sidebarEl.style.bottom = `auto`;
               sidebarEl.style.top = `-${sidebarHeight - screenHeight - 70}px`;
            }
            position = 1;
         } else {
            // เลื่อนขึ้น
            gapBot = Math.min(window.scrollY + sidebarHeight, gapBot);
            gapTop = Math.min(window.scrollY, gapTop);
            if (position == 1) {
               trigger(() => {
                  sidebarBlockEl.style.marginTop = `${window.scrollY + screenHeight - sidebarHeight}px`;
               });
               sidebarEl.style.top = `auto`;
               sidebarEl.style.bottom = `-${sidebarHeight - screenHeight + 70}px`;
            }
            position = -1;
         }
         prevScroll = scrollY;
      };

      sidebarEl.style.top = `auto`;
      sidebarEl.style.bottom = `-${sidebarEl.clientHeight - window.innerHeight}px`;

      scrollEvent();
      window.addEventListener('scroll', scrollEvent);

      return () => {
         window.removeEventListener('scroll', scrollEvent);
      };
   }, []);

   return (
      <div className="hidden flex-col md:flex">
         <div ref={sidebarBlockRef} className="mt-0" />
         <aside ref={sidebarRef} className="sticky flex min-h-[1200px] flex-col items-start self-start py-10 pr-5 ">
            <ReportOptionsSearchBar />
            <ReportOptionsTagSelector />
            <ReportOptionsFilter />
            <ReportOptionsSort />
         </aside>
      </div>
   );
}

export default ReportsOptions;
