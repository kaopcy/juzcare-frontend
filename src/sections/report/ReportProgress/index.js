import { useEffect, useState } from 'react';
// sections
import ReportProgressAddButton from './ReportProgressAddButton';
import ReportProgressForm from './ReportProgressForm';
import ReportProgressList from './ReportProgressList';
// photoswiper
import 'photoswipe/style.css';

function ReportProgress() {
   const [isAdd, setIsAdd] = useState(false);
   useEffect(() => {
      if (isAdd) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = 'auto';
      return () => {
         document.body.style.overflow = 'auto';
      };
   }, [isAdd]);
   return (
      <section className="flex w-full flex-col">
         <ReportProgressAddButton setIsAdd={setIsAdd} />
         <ReportProgressForm isAdd={isAdd} setIsAdd={setIsAdd} />
         <ReportProgressList />
      </section>
   );
}

export default ReportProgress;
