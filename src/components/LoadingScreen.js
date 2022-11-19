import { AnimatePresence, motion } from 'framer-motion';
// components
import Icon from '@/components/Icon';
// stores
import { useSelector } from '@/redux/store';

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
               className="fixed z-sidebar-overlay flex h-full w-full flex-col items-center justify-center bg-black/60"
            >
               <div className="flex h-56 w-56 flex-col items-center justify-center gap-y-10 rounded-lg bg-white">
                  <div className="flex items-center gap-x-3">
                     <Icon icon="bi:megaphone" className="h-24 w-24 text-primary" />
                     <div className="flex flex-col gap-y-7 ">
                        <motion.div className="h-1 w-6 -rotate-45 bg-primary" />
                        <motion.div className="h-1 w-6 bg-primary " />
                        <motion.div className="h-1 w-6 rotate-45  bg-primary" />
                     </div>
                  </div>
                  <span className="text-text">...กำลังโหลด...</span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default LoadingScreen;
