import ReportOptionsSearchBar from './ReportOptionsSearchBar';
import ReportOptionsFilter from './ReportOptionsFilter';
import ReportOptionsTag from './ReportOptionsTag';
import ReportOptionsSort from './ReportOptionsSort';

function ReportsOptions() {
   return (
      <aside className="sticky top-navbar flex flex-col items-start self-start py-10 pr-5">
         <ReportOptionsSearchBar />
         <ReportOptionsTag />
         <ReportOptionsFilter />
         <ReportOptionsSort />
      </aside>
   );
}

export default ReportsOptions;
