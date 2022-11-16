import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Icon from '@/components/Icon';

CreateReportTag.propTypes = {
   tag: PropTypes.string,
   onClick: PropTypes.func,
};

function CreateReportTag({ tag, onClick }) {
   return (
      <motion.button
         layout="position"
         type="button"
         onClick={onClick}
         className=" flex max-w-[100px] items-center gap-x-1 whitespace-nowrap rounded-full bg-primary/20 px-3 py-0.5 text-sm text-text"
      >
         <span className="ellipsis mt-[2px]">{tag}</span>
         <Icon className="h-3 w-3 shrink-0 text-error" icon="ic:twotone-close" />
      </motion.button>
   );
}

export default CreateReportTag;
