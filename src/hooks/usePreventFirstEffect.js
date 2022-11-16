import { useEffect, useRef } from 'react';

const usePreventFirstEffect = (effect, dep) => {
   const isFirstTime = useRef(true);
   useEffect(() => {
      if (isFirstTime.current) {
         isFirstTime.current = false;
         return;
      }
      const cleanup = effect();
      return () => {
         if (typeof cleanup === 'function') cleanup();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [...dep]);
};

export default usePreventFirstEffect;
