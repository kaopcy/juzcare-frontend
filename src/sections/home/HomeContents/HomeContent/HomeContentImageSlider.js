import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { memo, useMemo, useState } from 'react';

import Slider from 'react-slick';

HomeContentImageSlider.propTypes = {
   report: PropTypes.object,
};

function HomeContentImageSlider({ report }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const settings = useMemo(
      () => ({
         speed: 800,
         dots: true,
         arrows: false,
         autoplay: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         beforeChange: (current, next) => setCurrentIndex(next),
         customPaging: (i) => <div className="" />,
      }),
      []
   );

   return (
      <section className="hidden h-full w-[220px] flex-col justify-between self-start md:flex">
         <div className="">
            <Slider {...settings}>
               {[...Array(10)].map((_, index) => (
                  <div
                     key={index}
                     className="relative aspect-square h-[200px] w-full  shrink-0 cursor-grab overflow-hidden rounded-md"
                  >
                     <NextImage
                        objectFit="cover"
                        layout="fill"
                        src="https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                     />
                  </div>
               ))}
            </Slider>
         </div>
         <div className="flex h-3 items-center justify-center gap-x-2 overflow-hidden">
            {[...Array(10)].map((_, index) => (
               <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all  ${
                     currentIndex == index ? 'scale-125 bg-primary-dark' : 'scale-100 bg-text-lighter'
                  } `}
               />
            ))}
         </div>
      </section>
   );
}

export default memo(HomeContentImageSlider);
