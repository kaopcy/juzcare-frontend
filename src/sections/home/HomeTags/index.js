// sections
import HomeTagsHeader from './HomeTagsHeader';
import HomeTagSlider from './HomeTagSlider';

function HomeTags() {
   return (
      <section className="flex min-h-[600px] w-full max-w-[750px] flex-col items-center  gap-x-16 self-center">
         <HomeTagsHeader />
         <HomeTagSlider />
      </section>
   );
}

export default HomeTags;
