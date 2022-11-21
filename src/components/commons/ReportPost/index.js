import PropTypes from 'prop-types';
// components
import Icon from '@/components/Icon';
import Image from '@/components/Image';
// sections
import ReportPostHeader from './ReportPostHeader';
import ReportPostImageSlider from './ReportPostImageSlider';
// contexts
import { ReportContextProvider } from '@/contexts/reports/ReportContext';
import ReportUpVote from './ReportUpVote';
// swiper

ReportPost.propTypes = {
   report: PropTypes.object,
};

function ReportPost({ report }) {
   return (
      <ReportContextProvider initVal={report}>
         <article className="flex w-full items-start  text-text ">
            <div className="relative mr-3 h-16 w-16 shrink-0 overflow-hidden rounded-[50%]">
               <Image alt="bird" src={report.user.avatar.avatarUrl} objectFit="cover" layout="fill" />
            </div>
            <div className="flex w-full  flex-col  gap-y-5 min-w-0">
               <ReportPostHeader />
               <ReportPostImageSlider report={report} />
               <p>{report.detail}</p>
               <div className="flex text-text-light">
                  <ReportUpVote report={report} />
                  <button className="flex items-center">
                     <Icon className="mr-1 h-5 w-5" icon="ant-design:comment-outlined" />
                     <span className="-mb-2 text-sm font-normal">{report.comments.length}</span>
                  </button>
               </div>
            </div>
         </article>
         <div className="h-[1px] w-full bg-text-lighter " />
      </ReportContextProvider>
   );
}

export default ReportPost;
