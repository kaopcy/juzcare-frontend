import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Tag = forwardRef(({ tag }, ref) => (
   <button
      ref={ref}
      className="whitespace-nowrap rounded-md border-[1.8px] border-primary bg-paper px-2 py-[5px] text-base text-primary"
   >
      # {tag.name}
   </button>
));

Tag.propTypes = {
   tag: PropTypes.object,
};

export default Tag;
