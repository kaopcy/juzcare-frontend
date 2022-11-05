import NextImage from 'next/image';
import PropTypes from 'prop-types';
// components
import HomeTagContentDetail from './HomeContentDetail';
import HomeTagContentImageSlider from './HomeContentImageSlider';

HomeContent.propTypes = {
   report: PropTypes.object,
   active: PropTypes.bool,
};

function HomeContent({ report, active }) {
   return (
      <article className={`max-w-screen  h-[250px] w-full shrink-0 md:max-w-[750px]`}>
         <div
            className={`flex h-[250px] w-full shrink-0 justify-center gap-x-6 transition-all duration-500 ease-in-out md:max-w-[750px] ${
               active ? 'scale-100 opacity-100' : 'pacity-70 scale-[80%]'
            }`}
         >
            <div className="relative  h-16 w-16 overflow-hidden rounded-full">
               <NextImage
                  onLoad={() => {
                     console.log('image loaded');
                  }}
                  src={report?.user?.avatar?.avatarUrl}
                  objectFit="cover"
                  layout="fill"
               />
            </div>
            <HomeTagContentDetail report={report} />
            <HomeTagContentImageSlider report={report} />
         </div>
      </article>
   );
}

export default HomeContent;