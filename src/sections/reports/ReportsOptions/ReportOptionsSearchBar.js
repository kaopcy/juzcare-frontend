import { Icon } from '@iconify/react';
// store
import { useDispatch, useSelector } from '@/redux/store';
import { updateSearch } from '@/slices/reportOptions';
import useReportOptions from '@/hooks/useReportOptions';

function ReportOptionsSearchBar() {
   const dispatch = useDispatch();
   const search = useSelector((state) => state.reportOptions.search);

   const onChange = (event) => {
      dispatch(updateSearch({ search: event.target.value }));
   };

   return (
      <section className="mb-5 flex w-full items-center justify-between rounded-md border-2">
         <input
            onChange={onChange}
            type="text"
            placeholder="ค้นหาแท็ก"
            className="border-none outline-none placeholder:text-text-lighter"
         />
         <Icon icon="ic:sharp-search" className="h-10  w-10 text-text-lighter" />
      </section>
   );
}

export default ReportOptionsSearchBar;
