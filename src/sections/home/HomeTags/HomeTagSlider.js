import { useRef, useState } from 'react';
// sections
import Tag from '@/components/commons/Tag';
import { Icon } from '@iconify/react';
import { GetPopularTagGQL } from '@/graphql/report.gql'
import { useQuery } from '@apollo/client';

const SLIDE_AMOUNT = 400;

function HomeTagSlider() {
   const { data } = useQuery(GetPopularTagGQL, {
      variables: {
         tagsQuery: "",
      },
   });

   const sliderRef = useRef();
   const sliderContainerRef = useRef();

   const slideToLeft = () => {
      const slider = sliderRef.current;
      const currentTranslateX = slider.style.translate ? parseInt(slider.style.translate.slice(0, -2)) : 0;
      slider.style.translate = `${Math.min(currentTranslateX + SLIDE_AMOUNT, 0)}px`;
   };

   const slideToRight = () => {
      const slider = sliderRef.current;
      const sliderContainer = sliderContainerRef.current;
      const currentTranslateX = slider.style.translate ? parseInt(slider.style.translate.slice(0, -2)) : 0;

      const maxTranslateX = -(slider.clientWidth - sliderContainer.clientWidth);

      if (currentTranslateX - SLIDE_AMOUNT > maxTranslateX)
         slider.style.translate = `${currentTranslateX - SLIDE_AMOUNT}px`;
      else slider.style.translate = `${maxTranslateX}px`;
   };

   return (
      <section className="relative mb-20 w-full">
         <button onClick={slideToLeft} className="absolute top-1/2 right-full -translate-x-full  -translate-y-1/2">
            <Icon className=" h-5 w-5 text-text-light/70 hover:text-text" icon="akar-icons:circle-chevron-left-fill" />
         </button>

         <button onClick={slideToRight} className="absolute top-1/2 left-full translate-x-full -translate-y-1/2">
            <Icon className=" h-5 w-5 text-text-light/70 hover:text-text" icon="akar-icons:circle-chevron-right-fill" />
         </button>

         <div
            ref={sliderContainerRef}
            className="test-scroll relative h-[40px] w-full overflow-x-hidden overflow-y-hidden"
         >
            <div ref={sliderRef} className="absolute flex flex-nowrap gap-x-3  transition-all duration-500">
               {data?.getPopularTags?.map((tag) => (
                  <Tag key={tag._id} tag={tag} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default HomeTagSlider;
