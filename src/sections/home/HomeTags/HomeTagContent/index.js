import NextImage from 'next/image';
import PropTypes from 'prop-types';
// components
import HomeTagContentDetail from './HomeTagContentDetail';
import HomeTagContentImageSlider from './HomeTagContentImageSlider';

HomeTagContent.propTypes = {
   report: PropTypes.object,
};

function HomeTagContent({ report }) {
   return (
      <article className="max-w-screen flex h-[250px] w-full md:max-w-[750px] gap-x-6">
         <div className="relative  h-16 w-16 overflow-hidden rounded-full">
            <NextImage src="https://source.unsplash.com/gySMaocSdqs/600x300" objectFit="cover" layout="fill" />
         </div>
         <HomeTagContentDetail report={report} />
         <HomeTagContentImageSlider report={report} />

      </article>
   );
}

export default HomeTagContent;
