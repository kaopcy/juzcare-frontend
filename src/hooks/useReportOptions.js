import { useSelector } from '@/redux/store';

const useReportOptions = () => {
   const state = useSelector((state) => state.reportOptions);
   return {
      tags: state.tags,
      isLoading: state.isLoading,
      error: state.error,
      sort: state.sort,
      order: state.order,
      filter: state.filter,
      activeTags: state.activeTags,
      page: state.page,
      search: state.search,
   };
};

export default useReportOptions;
