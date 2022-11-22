import PropTypes from 'prop-types';
import { Blurhash } from 'react-blurhash';

import { classname } from '@/utils/getClassName';
import NextImage from 'next/image';

// stores
import { useDispatch } from '@/redux/store';
import { open } from '@/slices/ImageGallery';

import Loader from '@/svg/Loader';

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   loadingRender: PropTypes.node,
   lazy: PropTypes.bool,
   gallery: PropTypes.bool,
};

function Image({ src, alt, gallery = false, lazy = true, ...rest }) {
   const dispatch = useDispatch();
   const onClick = () => {
      if (!gallery) return;
      dispatch(open({ src }));
   };
   return (
      <>
         {lazy && (
            <div className="absolute inset-0 flex  h-full w-full items-center justify-center">
               <Blurhash
                  className=""
                  hash="LSG@[N.mt,=|ACVYs9XS%MxukCM|"
                  width={'100%'}
                  height={'100%'}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  punch={1}
               />
            </div>
         )}
         
         <NextImage
            onClick={onClick}
            className={classname('z-0 border-none outline-none', gallery && 'cursor-pointer', rest.className ?? '')}
            placeholder={() => <LoadingIndicator {...rest} />}
            alt={alt}
            layout="fill"
            objectFit="cover"
            src={src}
            {...rest}
         />
      </>
   );
}

function LoadingIndicator({ ...rest }) {
   return (
      <div
         className={classname(
            'absolute inset-0 flex  items-center justify-center bg-gray-300/30',
            rest.className ?? '',
         )}
      >
         <Loader className="w-[20%] min-w-[20px]" indicatorColor="#8f8f8f" />
      </div>
   );
}

export default Image;
