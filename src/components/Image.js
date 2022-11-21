import PropTypes from 'prop-types';
import { Blurhash } from 'react-blurhash';

import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { classname } from '@/utils/getClassName';

import Loader from '@/svg/Loader';

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   loadingRender: PropTypes.node,
};

function Image({ src, alt, loadingRender, ...rest }) {
   return (
      <>
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
         <NextImage
            className={classname('z-0 border-none outline-none', rest.className ?? '')}
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
