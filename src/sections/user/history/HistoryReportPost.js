import Icon from '@/components/Icon';
import Link from '@/components/Link';
import 'moment/locale/th';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import HistoryReportStatusTimeline from './HistoryReportStatusTimeline';

HistoryReportPost.propTypes = {
   report: PropTypes.object,
};

function HistoryReportPost({ report }) {
   return (
      <Link href={`/reports/${report._id}`}>
         <section className="flex w-full flex-col gap-y-2 rounded-md border border-text-lighter py-4 px-5">
            <div className="flex min-w-0 items-center gap-x-1">
               <h4 className="ellipsis whitespace-nowrap">{report.title}</h4>
               {report.tags.map((tag) => (
                  <div key={tag._id} className="whitespace-nowrap rounded-full bg-text-lighter px-2 py-0.5 text-xs">
                     #{tag.name}
                  </div>
               ))}
               <Moment
                  fromNow
                  locale="th"
                  className="ml-auto whitespace-nowrap pl-1 text-xs font-light text-text-light"
               >
                  {new Date(report.createdAt)}
               </Moment>
            </div>
            <div className="flex items-center gap-x-1">
               <Icon className="h-5 w-5  text-primary-dark" icon="ic:baseline-pin-drop" />
               <div className="mt-1 text-sm font-medium">{report.location.name}</div>
            </div>
            <div className="mx-auto mt-12 mb-6 w-[80%]">
               <HistoryReportStatusTimeline reportStatus={report.status} />
            </div>
         </section>
      </Link>
   );
}

export default HistoryReportPost;
