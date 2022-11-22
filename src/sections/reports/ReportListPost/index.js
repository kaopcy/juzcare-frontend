import PropTypes from 'prop-types';
// components
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import UserIconWithTooltip from '@/components/commons/UserIconWithTooltip';
// sections
import ReportListPostHeader from './ReportListPostHeader';
import ReportListPostImageSlider from './ReportListPostImageSlider';
// contexts
import { ReportContextProvider } from '@/contexts/reports/ReportContext';
import ReportListPostUpVote from './ReportListPostUpVote';
import Link from '@/components/Link';
// swiper

ReportListPost.propTypes = {
   report: PropTypes.object,
};

function ReportListPost({ report , index }) {
   return (
      <ReportContextProvider initVal={report}>
         <article className="flex w-full items-start  text-text ">
            <div className="relative mr-3 h-16 w-16 shrink-0 overflow-hidden rounded-[50%]">
               <UserIconWithTooltip alt="bird" index={index} src={report.user.avatar.avatarUrl} user={report.user} />
            </div>
            <div className="flex w-full  min-w-0  flex-col gap-y-5">
               <ReportListPostHeader />
               <ReportListPostImageSlider report={report} />
               <p>{report.detail}</p>
               <div className="flex text-text-light">
                  <ReportListPostUpVote report={report} />
                  <Link href={`/reports/${report._id}`}>
                     <a className="flex items-center ">
                        <Icon className="mr-1 h-5 w-5" icon="ant-design:comment-outlined" />
                        <span className="-mb-2 text-sm font-normal">{report.comments.length}</span>
                     </a>
                  </Link>
               </div>
            </div>
         </article>
         <div className="block h-[1px] w-full bg-text-lighter last:hidden" />
      </ReportContextProvider>
   );
}

export default ReportListPost;
