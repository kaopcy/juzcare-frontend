import { useSelector } from '@/redux/store';
import { useMemo } from 'react';
// framer
import { AnimatePresence } from 'framer-motion';
// components
import ReportOptionsTag from './ReportOptionsTag';

function ReportOptionsTagSelector() {
   const tags = useSelector((state) => state.reportOptions.tags);
   const activeTags = useSelector((state) => state.reportOptions.activeTags);

   const slicedTags = useMemo(
      () => tags?.filter((e) => !activeTags.find((ac) => e.name == ac.name)).slice(0, 9),
      [tags, activeTags],
   );

   return (
      <div className="mb-5 flex flex-col items-start justify-start gap-y-1.5">
         <AnimatePresence>
            {activeTags?.map((tag) => (
               <ReportOptionsTag value={tag.name} key={tag.name} tag={tag} selected />
            ))}
            <h3  className="mb-2 text-primary underline">
               แท็กยอดนิยม
            </h3>
            {slicedTags.map((tag) => (
               <ReportOptionsTag value={tag.name} key={tag.name} tag={tag} />
            ))}
         </AnimatePresence>
      </div>
   );
}

export default ReportOptionsTagSelector;
