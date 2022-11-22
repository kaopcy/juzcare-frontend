import PropTypes from 'prop-types';
// utils
import { classname } from '@/utils/getClassName';
// stores
import { useDispatch } from '@/redux/store';
import { updateActiveTags } from '@/slices/reportOptions';
// hooks
import useSearchQuery from '@/hooks/useSearchQuery';

const ReportListPostTag = ({ tag }) => {
   const { appendTagQuery } = useSearchQuery();
   const dispatch = useDispatch();
   const onTagsClick = () => {
      dispatch(updateActiveTags({ activeTags: [tag] }));
      appendTagQuery(tag.name);
   };

   return (
      <button
         onClick={onTagsClick}
         className={classname(
            'mr-2 whitespace-nowrap rounded-full bg-text-lighter px-3 py-0.5 text-xs font-normal text-text hover:bg-text-light',
         )}
      >
         {tag.name}
      </button>
   );
};

ReportListPostTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportListPostTag;
