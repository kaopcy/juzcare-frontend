import PropTypes from 'prop-types';
import { useMemo } from 'react';
// framer
import { motion } from 'framer-motion';
// utils
import { classname } from '@/utils/getClassName';
// store
import { useSelector, useDispatch } from '@/redux/store';
import Icon from '@/components/Icon';
import { updateActiveTags } from '@/slices/reportOptions';

const ReportOptionsTag = ({ tag, ...rest }) => {
   const dispatch = useDispatch();
   const onTagsClick = () => {
      dispatch(updateActiveTags({ activeTags: [tag] }));
   };

   const activeTags = useSelector((state) => state.reportOptions.activeTags);
   const isActive = useMemo(() => activeTags.includes(tag.name), [activeTags, tag]);
   return (
      <motion.div layoutId={`${tag._id}-${rest.selected ? 'selected' : ''}`} className="relative">
         <button
            {...rest}
            className={classname(
               'flex items-center gap-x-2 whitespace-nowrap rounded-md border-[1.8px] border-primary px-2 py-[5px]  text-left text-base transition-transform duration-500 ease-bounce  hover:bg-primary hover:text-paper ',
               rest.selected ? ' rounded-full bg-primary py-[3px] text-white' : 'bg-paper text-primary',
               rest.className,
            )}
            onClick={onTagsClick}
         >
            # {tag.name}
            {
               <Icon
                  className={classname('text-primary-dark', rest.selected ? 'block' : 'hidden')}
                  icon="carbon:close"
               />
            }
         </button>
      </motion.div>
   );
};

ReportOptionsTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportOptionsTag;
