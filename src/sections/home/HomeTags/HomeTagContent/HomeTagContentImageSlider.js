import { useState } from 'react';
import PropTypes from 'prop-types';
import NextImage from 'next/image';

HomeTagContentImageSlider.propTypes = {
   report: PropTypes.object,
};

function HomeTagContentImageSlider({ report }) {
   const [active] = useState(2);
   return (
      <section className=" flex h-full w-[220px] flex-col justify-between self-start">
         <div className="relative aspect-square  w-full overflow-hidden rounded-md">
            <NextImage
               objectFit="cover"
               layout="fill"
               src="https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
         </div>
         <div className="flex items-center justify-between">
            {[...Array(10)].map((_, index) => (
               <div
                  key={index}
                  className={`h-3 w-3 rounded-full   ${active == index ? 'bg-primary-dark' : 'bg-text-lighter'} `}
               />
            ))}
         </div>
      </section>
   );
}

export default HomeTagContentImageSlider;
