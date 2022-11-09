import { useMemo } from 'react';
import ReportPostTag from './ReportPostTag';
import Icon from '@/components/Icon';

function ReportPostHeader() {
   const postTags = useMemo(
      () => [
         {
            _id: 'posttag-123',
            name: 'ห้องน้ำ',
         },
         {
            _id: 'posttag-1234',
            name: 'อะไรสะอย่าง',
         },
      ],
      [],
   );
   return (
      <div className="flex h-16 w-full justify-between">
         <div className="flex flex-col items-start justify-center gap-y-0 p-1">
            <div className="flex items-center">
               <h4 className="mr-6">น้ำในห้องน้ำตึกโหลไม่ไหลจ้า</h4>
               {postTags.map((postTag) => (
                  <ReportPostTag key={postTag._id} tag={postTag} />
               ))}
            </div>
            <div className="flex items-center gap-x-1">
               <Icon className="text-primary-dark h-5 w-5" icon="ic:baseline-pin-drop" />
               <div className="text-sm font-normal">ตึก 12 ชั้น</div>
            </div>
         </div>
         <div className="flex flex-col items-end">
            <span>30 นาที</span>
            <span className="font-bold text-primary">รอรับเรื่อง</span>
         </div>
      </div>
   );
}

export default ReportPostHeader;
