import PropTypes from 'prop-types';

import { useState } from 'react';
import NextImage from 'next/image';
import { classname } from '@/utils/getClassName';

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
      <div className={classname('flex h-full w-full items-center justify-center bg-gray-300', rest.className ?? '')}>
         <div className="aspect-square w-[20%] animate-spin rounded-full border-2 border-t-0 border-gray-500 " />
      </div>
   );
}

export default Image;
