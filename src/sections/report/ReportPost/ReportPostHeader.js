import Icon from '@/components/Icon';
// contexts
import { useReportContext } from '@/contexts/reports/ReportContext';
// components
import 'moment/locale/th';
import Moment from 'react-moment';
import ReportPostTag from './ReportPostTag';

function ReportPostHeader() {
   const report = useReportContext();

   return (
      <div className="flex w-full items-start overflow-hidden  p-1">
         <div className="flex min-h-0 w-full min-w-0 flex-col items-start justify-center gap-y-1">
            <div className="flex w-[100%] min-w-0 flex-col items-start">
               <div className="mb-4 flex w-full items-start justify-between">
                  <h4 className="mr-6 text-xl ">{report.title}</h4>
                  <div className="flex shrink-0 flex-col items-end gap-y-1  text-text-light">
                     <span>
                        <Moment fromNow locale="th">
                           {new Date(report.createdAt)}
                        </Moment>
                     </span>
                  </div>
               </div>
               <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                     {report.tags.map((postTag) => (
                        <ReportPostTag key={postTag._id} tag={postTag} />
                     ))}
                  </div>
                  <div className="flex items-center gap-x-1">
                     <Icon className="h-5 w-5 text-primary-dark" icon="ic:baseline-pin-drop" />
                     <div className="text-sm font-normal">{report.location.name}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ReportPostHeader;
