import { useMemo } from 'react';
// components
import Image from 'next/image';
import ReportPostHeader from './ReportPostHeader';
import ReportPostImageSlider from './ReportPostImageSlider';
import Icon from '@/components/Icon';

function ReportPost() {
   return (
      <>
         <article className="flex w-full text-text">
            <div className="relative mr-3 h-16 w-16 shrink-0 overflow-hidden rounded-full">
               <Image alt="bird" src="https://source.unsplash.com/aeNg4YA41P8" objectFit="cover" layout="fill" />
            </div>
            <div className="flex w-full flex-col gap-y-5">
               <ReportPostHeader />
               <ReportPostImageSlider />
               <p>น้ำในห้องน้ำตึกโหลไม่ไหลเลยอะ เป็นแบบนี้มาหลายอาทิตย์แล้วอะ อารมณ์เสียเลย ปวดขี้ก็ปวด ทำไรไม่ได้</p>
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
      </>
   );
}

export default ReportPost;
