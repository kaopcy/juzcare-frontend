import { useDispatch, useSelector } from '@/redux/store';
import { close } from '@/slices/ImageGallery';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';

function ImageGallery() {
   const { isOpen, src } = useSelector((state) => state.imageGallery);
   const dispatch = useDispatch();

   // useEffect(
   //    () => () => {
   //       dispatch(close());
   //    },
   //    [dispatch],
   // );

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ ease: 'easeInOut' }}
               onClick={() => dispatch(close())}
               className="fixed z-[10000] flex h-full w-full flex-col items-center justify-center "
            >
               <div  className="absolute inset-0 z-10 bg-black/60" />
               <div className="z-20 flex items-center gap-x-3 ">
                  <img src={src} alt="image-gallery" />
               </div>
               <button onClick={() => dispatch(close())} className="absolute top-[10vh] right-[10vh]  z-30">
                  <Icon className="h-10 w-10 text-text-light" icon="ic:twotone-close" />
               </button>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default ImageGallery;
