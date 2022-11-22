import { useContext } from 'react';
import { ReportContext } from '@/contexts/ReportContext';

const useReport = () => {
   const { state, dispatch } = useContext(ReportContext);
   
   return { report: state.report, isLoading: state.isLoading, dispatch };
};

export default useReport;
