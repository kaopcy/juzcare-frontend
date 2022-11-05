import PropTypes from 'prop-types';
// icon
import { Icon } from '@iconify/react';

HomeContentDetail.propTypes = {
   report: PropTypes.object,
};

function HomeContentDetail({ report }) {
   return (
      <section className="flex w-[355px] flex-col rounded-md border-2 border-text-lighter px-3 py-5 ">
         <p className="h-full   font-medium tracking-wide ">{report.detail}</p>
         <div className="flex items-center gap-x-4 text-text-light">
            <button className="flex ">
               <Icon className="h-5 w-5" icon="ant-design:like-outlined" />
               <p className="mt-[2px] text-sm font-medium text-text-light">{report.likes}</p>
            </button>

            <button className="flex ">
               <Icon className="h-5 w-5" icon="ant-design:comment-outlined" />
               <p className="mt-[2px] text-sm font-medium text-text-light">{report.comments}</p>
            </button>
         </div>
      </section>
   );
}

export default HomeContentDetail;
