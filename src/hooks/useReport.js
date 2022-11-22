import { useContext } from 'react';
import { ReportContext } from '@/contexts/ReportContext';

const useReport = () => {
   const { report } = useContext(ReportContext);

   return { report };
};

export default useReport;
