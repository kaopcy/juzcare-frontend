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
import Link from '@/components/Link';
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
            <div className="flex w-full  min-w-0  flex-col gap-y-5">
               <ReportPostHeader />
               <ReportPostImageSlider report={report} />
               <p className='text-lg' >{report.detail}</p>
               <div className="flex text-text-light">
                  <ReportUpVote report={report} />
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

export default ReportPost;
