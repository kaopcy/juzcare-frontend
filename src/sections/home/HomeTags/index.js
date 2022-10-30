// sections
import HomeTagsHeader from './HomeTagsHeader';
import HomeTagSlider from './HomeTagSlider';
import HomeTagContentsSlider from './HomeTagContentsSlider';
// contexts
import { ReportsProvider } from '@/contexts/Home/ReportsContext';

function HomeTags() {
   return (
      <section className="flex min-h-[600px] w-full max-w-[750px] flex-col items-center  gap-x-16 self-center">
         <ReportsProvider>
            <HomeTagsHeader />
            <HomeTagSlider />
            <HomeTagContentsSlider />
         </ReportsProvider>
      </section>
   );
}

export default HomeTags;
