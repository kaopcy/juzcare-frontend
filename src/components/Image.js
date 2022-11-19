import PropTypes from 'prop-types';

import { useState } from 'react';
import NextImage from 'next/image';
import { classname } from '@/utils/getClassName';

import Loader from '@/svg/Loader';

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   loadingRender: PropTypes.node,
};

function Image({ src, alt, loadingRender, ...rest }) {
   const [isLoaded, setIsLoaded] = useState(false);

   return (
      <>
         <NextImage
            className={classname('border-none', rest.className ?? '')}
            alt={alt}
            layout="fill"
            objectFit="cover"
            onLoad={() => setIsLoaded(true)}
            src={src}
            {...rest}
         />
         {!isLoaded && (loadingRender ?? <LoadingIndicator {...rest} />)}
      </>
   );
}

function LoadingIndicator({ ...rest }) {
   return (
      <div className={classname('flex h-full w-full items-center justify-center bg-gray-300/30', rest.className ?? '')}>
         <Loader className="w-[20%] min-w-[20px]" indicatorColor="#8f8f8f" />
      </div>
   );
}

export default Image;
