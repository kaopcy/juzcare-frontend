import PropTypes from 'prop-types';
import { useMemo } from 'react';
// components
import Image from 'next/image';
import ReportPostHeader from './ReportPostHeader';
import ReportPostImageSlider from './ReportPostImageSlider';
import Icon from '@/components/Icon';
// contexts
import { ReportContextProvider } from '@/contexts/reports/ReportContext';

ReportPost.propTypes = {
   report: PropTypes.object,
};

function ReportPost({ report }) {
   return (
      <ReportContextProvider initVal={report}>
         <article className="flex w-full text-text">
            <div className="relative mr-3 h-16 w-16 shrink-0 overflow-hidden rounded-full">
               <Image alt="bird" src={report.user.avatar.avatarUrl} objectFit="cover" layout="fill" />
            </div>
            <div className="flex w-full flex-col gap-y-5">
               <ReportPostHeader />
               <ReportPostImageSlider />
               <p>{report.detail}</p>
               <div className="flex text-text-light">
                  <button className="flex items-center">
                     <Icon className="mr-1 h-5 w-5" icon="ant-design:like-outlined" />
                     <span className="-mb-2 mr-2 text-sm font-normal">13</span>
                  </button>
                  <button className="flex items-center">
                     <Icon className="mr-1 h-5 w-5" icon="ant-design:comment-outlined" />
                     <span className="-mb-2 text-sm font-normal">2</span>
                  </button>
               </div>
            </div>
         </article>
         <div className="h-[1px] w-full bg-text-lighter " />
      </ReportContextProvider>
   );
}

export default ReportPost;
