import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

HomeContentImageSlider.propTypes = {
   report: PropTypes.object,
};

function HomeContentImageSlider({ report }) {
   const [active] = useState(2);
   return (
      <section className="hidden h-full w-[220px] flex-col justify-between self-start md:flex">
         <div className="relative aspect-square  w-full overflow-hidden rounded-md">
            <NextImage
               objectFit="cover"
               layout="fill"
               src="https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            />
         </div>
         <div className="flex items-center justify-center gap-x-2 overflow-hidden ">
            {[...Array(10)].map((_, index) => (
               <div
                  key={index}
                  className={`h-2 w-2 rounded-full   ${active == index ? 'bg-primary-dark' : 'bg-text-lighter'} `}
               />
            ))}
         </div>
      </section>
   );
}

export default HomeContentImageSlider;
