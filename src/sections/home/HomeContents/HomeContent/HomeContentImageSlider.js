import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { memo, useMemo, useState } from 'react';

import Slider from 'react-slick';

HomeContentImageSlider.propTypes = {
   report: PropTypes.object,
   active: PropTypes.bool,
};

function HomeContentImageSlider({ report , active }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   const settings = useMemo(
      () => ({
         speed: 800,
         dots: true,
         arrows: false,
         autoplay: active,
         slidesToShow: 1,
         slidesToScroll: 1,
         beforeChange: (current, next) => setCurrentIndex(next),
         customPaging: (i) => <div className="" />,
      }),
      [active]
   );

   return (
      <section className="hidden h-full w-[220px] flex-col justify-between self-start md:flex">
         <div className="">
            <Slider {...settings}>
               {report?.medias?.map((media) => (
                  <div
                     key={media._id}
                     className="relative aspect-square h-[200px] w-full  shrink-0 cursor-grab overflow-hidden rounded-md"
                  >
                     <NextImage objectFit="cover" layout="fill" src={media.imageUrl} />
                  </div>
               ))}
            </Slider>
         </div>
         <div className="flex h-3 items-center justify-center gap-x-2 overflow-hidden">
            {[...Array(report?.medias?.length)].map((_, index) => (
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
