import PropTypes from 'prop-types';
// utils
import { classname } from '@/utils/getClassName';
import Link from '@/components/Link';

const ReportPostTag = ({ tag }) => (
   <Link href={`/reports?tag=${tag.name}`}>
      <a
         className={classname(
            'mr-2 whitespace-nowrap rounded-full bg-text-lighter px-3 py-0.5 text-xs font-normal text-text hover:bg-text-light/60',
         )}
      >
         #{tag.name}
      </a>
   </Link>
);

ReportPostTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportPostTag;
