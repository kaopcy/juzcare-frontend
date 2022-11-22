import PropTypes from 'prop-types';
import { useEffect } from 'react';
// components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Image from '@/components/Image';

import PhotoSwipeLightbox from 'photoswipe/lightbox';

ReportPostImageSlider.propTypes = {
   report: PropTypes.object,
};

function ReportPostImageSlider({ report }) {
   useEffect(() => {
      let lightbox = new PhotoSwipeLightbox({
         gallery: '#' + `photoLightBox-${report._id}`,
         children: 'a',
         pswpModule: () => import('photoswipe'),
      });
      lightbox.init();

      return () => {
         lightbox.destroy();
         lightbox = null;
      };
   }, [report]);

   return (
      <Swiper
         id={`photoLightBox-${report._id}`}
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
         className="w-full "
      >
         {report?.medias?.map((media) => (
            <SwiperSlide key={media._id} className="relative aspect-[4/3] h-[200px]">
               <div data-cropped="true" data-pswp-width={800} data-pswp-height={450} href={media.imageUrl}>
                  <Image gallery alt="test" layout="fill" objectFit="cover" src={media.imageUrl} />
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}

export default ReportPostImageSlider;
