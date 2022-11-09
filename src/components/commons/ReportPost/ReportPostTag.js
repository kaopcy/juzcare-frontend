import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// utils
import { classname } from '@/utils/getClassName';

const ReportPostTag = ({ tag }) => {
   console.log(tag);
   return (
      <button  className={classname('bg-text-lighter font-normal text-xs px-3 py-0.5 text-text rounded-full mr-2')}>
         {tag.name}
      </button>
   )
}

ReportPostTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportPostTag;
