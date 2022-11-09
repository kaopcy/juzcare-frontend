import PropTypes from 'prop-types';
import { useMemo } from 'react';
// utils
import { classname } from '@/utils/getClassName';
// store
import { useSelector } from '@/redux/store';
import Icon from '@/components/Icon';

const ReportOptionsTag = ({ tag, ...rest }) => {
   const activeTags = useSelector((state) => state.reportOptions.activeTags);
   const isActive = useMemo(() => activeTags.includes(tag.name), [activeTags, tag]);
   return (
      <div className="relative">
         <div
            className={classname(
               'absolute top-1/2  -translate-y-1/2 transition-all duration-500 pointer-events-none',
               isActive ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
            )}
         >
            <Icon className="text-green-500" icon="akar-icons:check-box-fill" />
         </div>
         <button
            {...rest}
            className={classname(
               'whitespace-nowrap rounded-md border-[1.8px] border-primary px-2 py-[5px]  text-left text-base transition-transform duration-500 ease-bounce  hover:bg-primary hover:text-paper ',
               isActive ? ' translate-x-6 bg-primary text-white ' : 'bg-paper text-primary',
               rest.className,
            )}
         >
            # {tag.name}
         </button>
      </div>
   );
};

ReportOptionsTag.propTypes = {
   tag: PropTypes.object,
};

export default ReportOptionsTag;
