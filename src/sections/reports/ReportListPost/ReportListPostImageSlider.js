import PropTypes from 'prop-types';
// components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Image from '@/components/Image';

ReportListPostImageSlider.propTypes = {
   report: PropTypes.object,
};

function ReportListPostImageSlider({ report }) {
   return (
      <Swiper
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
               <Image gallery alt="test" layout="fill" objectFit="cover" src={media.imageUrl} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}

export default ReportListPostImageSlider;
