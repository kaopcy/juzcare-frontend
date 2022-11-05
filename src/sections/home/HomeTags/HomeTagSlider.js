import { useState, useRef, useEffect } from 'react';
// sections
import HomeTag from './HomeTag';
import { Icon } from '@iconify/react';

const SLIDE_AMOUNT = 400;

function HomeTagSlider() {
   const [tags] = useState([
      {
         id: '1234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '12345',
         name: 'คุคุควย',
      },
      {
         id: '12346',
         name: 'หิวข้าว',
      },
      {
         id: '2234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '22345',
         name: 'คุคุควย',
      },
      {
         id: '22346',
         name: 'หิวข้าว',
      },
      {
         id: '11234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '112345',
         name: 'คุคุควย',
      },
      {
         id: '112346',
         name: 'หิวข้าว',
      },
      {
         id: '12234',
         name: 'โรงอาหารพระเทพ',
      },
      {
         id: '122345',
         name: 'คุคุควย',
      },
      {
         id: '122346',
         name: 'หิวข้าว',
      },
   ]);

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
      <section className="relative w-full mb-20">
         <button onClick={slideToLeft} className="absolute top-1/2 right-full -translate-x-full  -translate-y-1/2">
            <Icon className=" h-5 w-5 text-text-light/70 hover:text-text" icon="akar-icons:circle-chevron-left-fill" />
         </button>

         <button onClick={slideToRight} className="absolute top-1/2 left-full translate-x-full -translate-y-1/2">
            <Icon className=" h-5 w-5 text-text-light/70 hover:text-text" icon="akar-icons:circle-chevron-right-fill" />
         </button>

         <div ref={sliderContainerRef} className="test-scroll relative h-[40px] w-full overflow-x-hidden overflow-y-hidden">
            <div ref={sliderRef} className="absolute flex flex-nowrap gap-x-3  transition-all duration-500">
               {tags.map((tag) => (
                  <HomeTag key={tag.id} tag={tag} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default HomeTagSlider;
