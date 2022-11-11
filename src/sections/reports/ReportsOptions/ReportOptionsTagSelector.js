import { useEffect } from 'react';
import { useSelector } from '@/redux/store';
// framer
import { motion, AnimatePresence } from 'framer-motion';
// components
import ReportOptionsTag from './ReportOptionsTag';

function ReportOptionsTagSelector() {
   const tags = useSelector((state) => state.reportOptions.tags);
   const activeTags = useSelector((state) => state.reportOptions.activeTags);

   useEffect(() => {
      console.log(activeTags);
      console.log(tags);
   }, [activeTags, tags]);

   return (
      <div className="mb-5 flex flex-col items-start justify-start gap-y-1.5">
         <AnimatePresence>
            {activeTags?.slice(0, 5).map((tag) => (
               <ReportOptionsTag value={tag._id} key={tag._id} tag={tag} selected />
            ))}
            <motion.h3  layoutId='h3-name-123' className="mb-2 text-primary underline">แท็กยอดนิยม</motion.h3>
            {tags
               ?.filter((e) => !activeTags.find((ac) => e._id == ac._id))
               .slice(0, 5)
               .map((tag) => (
                  <ReportOptionsTag value={tag._id} key={tag._id} tag={tag} />
               ))}
         </AnimatePresence>
      </div>
   );
}

export default ReportOptionsTagSelector;
