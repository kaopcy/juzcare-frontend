import NextImage from 'next/image';
// logo
import Logo from '@/svg/Logo';
// sections
import HomeSummaryMainProblem from './HomeSummaryMainProblem';
import HomeSummarySideProblem from './HomeSummarySideProblem';

function HomeSummary() {
   return (
      <section className="flex min-h-screen w-full relative flex-col items-center justify-center">
         <div className="absolute top-0  left-0 z-0 h-screen w-full">
            <NextImage src="/images/home/summary_bg_image.jpg" layout="fill" objectFit="cover" priority={true} />
         </div>
         <div className="relative z-10 w-72 mb-40">
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
