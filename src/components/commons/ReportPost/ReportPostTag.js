import PropTypes from 'prop-types';
// framer
import { motion } from 'framer-motion';

// utils
import { classname } from '@/utils/getClassName';

const ReportPostTag = ({ tag }) => (
      <motion.button
         layout
         className={classname('mr-2 rounded-full bg-text-lighter px-3 py-0.5 text-xs font-normal text-text')}
      >
         {tag.name}
      </motion.button>
   );

ReportPostTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportPostTag;
