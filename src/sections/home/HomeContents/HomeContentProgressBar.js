import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

HomeContentProgressBar.propTypes = {
   reportLength: PropTypes.number,
   currentReport: PropTypes.number,
};

function HomeContentProgressBar({ reportLength, currentReport }) {
   const containerRef = useRef();
   const progressBarRef = useRef();
   useEffect(() => {
      const { current: containerEl } = containerRef;
      const { current: progressBarEl } = progressBarRef;
      const containerWidth = containerEl.clientWidth;

      const progressWidth = containerWidth / reportLength;
      progressBarEl.style.width = `${progressWidth}px`;
      progressBarEl.style.translate = `${progressWidth * currentReport}px 0`;
   }, [reportLength, currentReport]);

   return (
      <section ref={containerRef} className="relative h-1 w-full bg-text-lighter">
         <div ref={progressBarRef} className="h-full  bg-primary-dark transition-all duration-500" />
      </section>
   );
}

export default HomeContentProgressBar;
