import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// utils
import { classname } from '@/utils/getClassName';

const Tag = forwardRef(({ tag, ...rest }, ref) => (
   <button
      ref={ref}
      className={classname(
         'whitespace-nowrap font-normal rounded-md border-[1.8px] border-primary bg-paper px-2 py-[5px] text-left text-base text-primary hover:bg-primary hover:text-paper',
         rest.className,
      )}
   >
      # {tag.name}
   </button>
));

Tag.propTypes = {
   tag: PropTypes.object,
};

export default Tag;
