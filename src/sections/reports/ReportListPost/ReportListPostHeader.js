import Icon from '@/components/Icon';
// contexts
import { useReportContext } from '@/contexts/reports/ReportContext';
// components
import ReportListPostTag from './ReportListPostTag';
import Moment from 'react-moment';
import 'moment/locale/th';
import { getStatusTHLabel } from '@/configs/reportConfig/reportStatus.config';
import Link from '@/components/Link';

function ReportListPostHeader() {
   const report = useReportContext();

   return (
      <div className="flex h-16 w-full items-center p-1  overflow-hidden">
         <div className="flex w-full flex-col items-start min-w-0 min-h-0 justify-center gap-y-1">
            <div className="flex w-[100%] min-w-0 items-center">
               <Link href={`/reports/${report?._id}`}>
                  <h4 className="ellipsis mr-6 cursor-pointer whitespace-nowrap hover:underline">{report.title}</h4>
               </Link>
               {report.tags.map((postTag) => (
                  <ReportListPostTag key={postTag._id} tag={postTag} />
               ))}
            </div>
            <div className="flex items-center gap-x-1">
               <Icon className="h-5 w-5 text-primary-dark" icon="ic:baseline-pin-drop" />
               <div className="text-sm font-normal">{report.location.name}</div>
            </div>
         </div>
         <div className="flex shrink-0 flex-col items-end gap-y-1  text-text-light">
            <span>
               <Moment fromNow locale="th">
                  {new Date(report.createdAt)}
               </Moment>
            </span>

            <span className="font-bold text-primary">{getStatusTHLabel(report.status.type)}</span>
         </div>
      </div>
   );
}

export default ReportListPostHeader;
