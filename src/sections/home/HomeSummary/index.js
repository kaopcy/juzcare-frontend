import { useEffect, useRef } from 'react';

import NextImage from 'next/image';
// logo
import Logo from '@/svg/Logo';
// sections
import HomeSummaryMainProblem from './HomeSummaryMainProblem';
import HomeSummarySideProblem from './HomeSummarySideProblem';

function HomeSummary() {
   const bgRef = useRef();

   useEffect(() => {
      const handleOnScroll = () => {

         const { current: bgEl } = bgRef;
         const scrollY = window.scrollY
         const progress = Math.min(1, scrollY / bgEl.clientHeight);
         bgEl.style.translate = `0 ${progress * 15}vh`
      };

      window.addEventListener('scroll', handleOnScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleOnScroll);
   }, []);

   return (
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
         <div
            ref={bgRef}
            className="absolute top-0 left-0 z-0 h-screen w-full opacity-80"
         >
            <NextImage src="/images/home/summary_bg_image.jpg" layout="fill" objectFit="cover" priority={true} />
         </div>
         <div className="relative z-10 mb-40 w-48  md:w-72 ">
            <Logo />
         </div>
         <div className="z-10 flex items-center justify-center gap-x-10">
            <HomeSummarySideProblem />
            <HomeSummaryMainProblem />
            <HomeSummarySideProblem />
         </div>
      </section>
   );
}

export default HomeSummary;
