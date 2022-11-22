import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
// components
import Image from '@/components/Image';
// moments
import Moment from 'react-moment';
import 'moment/locale/th';

import Icon from '@/components/Icon';

ReportProgressPost.propTypes = {
   progress: PropTypes.object,
};

function ReportProgressPost({ progress }) {
   const sliderRef = useRef();
   const onNextClick = () => {
      sliderRef.current.swiper.slideNext();
   };

   const onPrevClick = () => {
      sliderRef.current.swiper.slidePrev();
   };

   return (
      <section className="flex min-h-0 w-full min-w-0 items-start rounded-lg border-2 border-primary/20 bg-primary-light/10 px-8 py-8">
         <div className="relative mr-5 h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image alt="avatar" src={progress?.user?.avatar?.avatarUrl} />
         </div>
         <div className="flex min-h-0 w-full min-w-0 flex-col">
            <div className="flex justify-between">
               <div className="flex min-h-0 w-full min-w-0 flex-col">
                  <h4>{progress.user.firstName}</h4>
                  <p className="mb-4">{progress.detail}</p>
               </div>
               <Moment fromNow locale="th" className="ml-auto whitespace-nowrap pl-1 text-sm  text-text-light">
                  {new Date(progress.createdAt)}
               </Moment>
            </div>
            <div className="relative flex w-full items-center">
               <button
                  onClick={onPrevClick}
                  className=" absolute  top-1/2 right-[102%] w-5 -translate-y-1/2 cursor-pointer"
               >
                  <Icon icon="ic:outline-navigate-next" className="h-8 w-5 shrink-0 rotate-180" />
               </button>

               <Swiper
                  ref={sliderRef}
                  id={`photoLightBox-${progress._id}`}
                  slidesPerView={1}
                  spaceBetween={8}
                  freeMode={true}
                  breakpoints={{
                     500: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                     },
                     800: {
                        slidesPerView: 3,
                        spaceBetween: 8,
                     },
                  }}
                  modules={[FreeMode, Pagination]}
                  className="w-full"
               >
                  {progress.medias.map((media) => (
                     <SwiperSlide key={media._id} className="relative aspect-[4/3] h-[200px]">
                        <Image gallery alt="image" src={media.imageUrl} />
                     </SwiperSlide>
                  ))}
               </Swiper>
               <button
                  onClick={onNextClick}
                  className=" absolute  top-1/2 left-[102%] h-full w-5 -translate-y-1/2 cursor-pointer "
               >
                  <Icon icon="ic:outline-navigate-next" className="h-8 w-5 shrink-0" />
               </button>
            </div>
         </div>
      </section>
   );
}

export default ReportProgressPost;
