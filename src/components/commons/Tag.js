import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// utils
import { classname } from '@/utils/getClassName';
import Link from '../Link';

const Tag = forwardRef(({ tag, ...rest }, ref) => (
   <Link href={`/reports?tag=${tag.name}`}>
      <a
         ref={ref}
         className={classname(
            'whitespace-nowrap rounded-md border-[1.8px] border-primary bg-paper px-2 py-[5px] text-left text-base font-normal text-primary hover:bg-primary hover:text-paper',
            rest.className,
         )}
      >
         # {tag.name}
      </a>
   </Link>
));

Tag.propTypes = {
   tag: PropTypes.object,
};

export default Tag;
