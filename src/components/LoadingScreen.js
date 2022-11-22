import { AnimatePresence, motion } from 'framer-motion';
// stores
import { useSelector } from '@/redux/store';
import Image from 'next/image';

function LoadingScreen() {
   const { isLoading } = useSelector((state) => state.loading);
   return (
      <AnimatePresence>
         {isLoading && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ ease: 'easeInOut' }}
               className="fixed z-[10000] flex h-full w-full flex-col items-center justify-center bg-black/60"
            >
               <div className="flex h-56 w-56 flex-col items-center justify-center gap-y-10 rounded-lg bg-white shadow-xl">
                  <div className="flex items-center gap-x-3">
                     <div className="relative h-20 w-32">
                        <Image alt="loading" src="/images/loading/loading.gif" objectFit="cover" layout="fill" />
                     </div>
                  </div>
                  <span className="text-text text-lg font-bold">...กำลังโหลด...</span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default LoadingScreen;
