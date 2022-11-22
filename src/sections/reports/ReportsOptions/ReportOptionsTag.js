import PropTypes from 'prop-types';
// utils
import { classname } from '@/utils/getClassName';
// store
import { useDispatch } from '@/redux/store';
import { updateActiveTags } from '@/slices/reportOptions';
// components
import Icon from '@/components/Icon';
// hooks
import useSearchQuery from '@/hooks/useSearchQuery';

const ReportOptionsTag = ({ tag, selected = false, ...rest }) => {
   const { appendTagQuery, removeTagQuery, tagQuery } = useSearchQuery();
   const dispatch = useDispatch();
   
   const onTagsClick = () => {
      dispatch(updateActiveTags({ activeTags: [tag] }));
      if (selected) removeTagQuery(tag.name);
      else appendTagQuery(tag.name);
   };

   return (
      <div className="relative">
         <button
            {...rest}
            className={classname(
               'flex items-center gap-x-2 whitespace-nowrap rounded-md border-[1.8px] border-primary px-2 py-[5px] text-left  text-base font-normal transition-transform duration-500 ease-bounce  hover:bg-primary hover:text-paper ',
               selected ? ' rounded-full bg-primary py-[3px] text-white' : 'bg-paper text-primary',
               rest.className,
            )}
            onClick={onTagsClick}
         >
            # {tag.name}
            <Icon className={classname('text-primary-dark', selected ? 'block' : 'hidden')} icon="carbon:close" />
         </button>
      </div>
   );
};

ReportOptionsTag.propTypes = {
   tag: PropTypes.object,
   selected: PropTypes.bool,
};

export default ReportOptionsTag;
