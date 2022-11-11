import Icon from '@/components/Icon';
// contexts
import { useReportContext } from '@/contexts/reports/ReportContext';
// components
import ReportPostTag from './ReportPostTag';
import Moment from 'react-moment';
import 'moment/locale/th';

function ReportPostHeader() {
   const report = useReportContext();

   return (
      <div className="flex h-16 w-full justify-between p-1">
         <div className="flex flex-col items-start justify-center gap-y-1 ">
            <div className="flex items-center">
               <h4 className="mr-6">{report.title}</h4>
               {report.tags.map((postTag) => (
                  <ReportPostTag key={postTag._id} tag={postTag} />
               ))}
            </div>
            <div className="flex items-center gap-x-1">
               <Icon className="h-5 w-5 text-primary-dark" icon="ic:baseline-pin-drop" />
               <div className="text-sm font-normal">{report.location.name}</div>
            </div>
         </div>
         <div className="flex flex-col items-end gap-y-1 text-text-light">
            <span>
               <Moment
                  fromNow
                  locale="th"
               >
                  {new Date(report.createdAt)}
               </Moment>
            </span>

            <span className="font-bold text-primary">รอรับเรื่อง</span>
         </div>
      </div>
   );
}

export default ReportPostHeader;
