import ReportOptionsSearchBar from './ReportOptionsSearchBar';
import ReportOptionsFilter from './ReportOptionsFilter';
import ReportOptionsTagSelector from './ReportOptionsTagSelector';
import ReportOptionsSort from './ReportOptionsSort';

function ReportsOptions() {
   return (
      <aside className="sticky top-navbar flex flex-col items-start self-start py-10 pr-5">
         <ReportOptionsSearchBar />
         <ReportOptionsTagSelector />
         <ReportOptionsFilter />
         <ReportOptionsSort />
      </aside>
   );
}

export default ReportsOptions;
