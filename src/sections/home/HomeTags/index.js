// sections
import HomeTagsHeader from './HomeTagsHeader';
import HomeTagSlider from './HomeTagSlider';

function HomeTags() {
   return (
      <section className="flex  w-full  flex-col items-center  gap-x-16 self-center">
         <HomeTagsHeader />
         <HomeTagSlider />
      </section>
   );
}

export default HomeTags;
