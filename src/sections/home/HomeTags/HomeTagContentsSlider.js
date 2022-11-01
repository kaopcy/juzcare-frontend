import { useState } from 'react';
// components
import HomeTagContent from './HomeTagContent';
// contexts
import { useReports } from '@/contexts/Home/ReportsContext';

function HomeTagContentsSlider() {
   const { reports } = useReports();
   return (
      <section className="">
         {reports.map((report) => (
            <HomeTagContent report={report} key={report.id} />
         ))}
      </section>
   );
}

export default HomeTagContentsSlider;
