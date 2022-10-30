import { useState } from 'react';
// components
import HomeTagContent from './HomeTagContent';
// contexts
import { useReports } from '@/contexts/Home/ReportsContext';

function HomeTagContentsSlider() {
   const { reports } = useReports();
   console.log(reports);
   return (
      <section className="">
         {reports.map((report) => (
            <HomeTagContent report={report} key={report.id} />
         ))}
      </section>
   );
}

export default HomeTagContentsSlider;
