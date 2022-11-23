import PropTypes from 'prop-types';
// icon
import { Icon } from '@iconify/react';
import Link from '@/components/Link';

HomeContentDetail.propTypes = {
   report: PropTypes.object,
};

function HomeContentDetail({ report }) {
   return (
      <section className="flex w-[355px] flex-col rounded-md border-2 border-text-lighter px-3 py-5 ">
         <Link href={`/reports/${report._id}`}>
            <span className="h-full   font-medium tracking-wide ">{report.detail}</span>
         </Link>
         <div className="flex items-center gap-x-4 text-text-light">
            <button className="flex ">
               <Icon className="h-5 w-5" icon="ant-design:like-outlined" />
               <span className="mt-[2px] text-sm font-medium text-text-light">{report.upVotes.length}</span>
            </button>

            <button className="flex ">
               <Icon className="h-5 w-5" icon="ant-design:comment-outlined" />
               <span className="mt-[2px] text-sm font-medium text-text-light">{report.comments.length}</span>
            </button>
         </div>
      </section>
   );
}

export default HomeContentDetail;
