import { Icon } from '@iconify/react';
// store
import { useDispatch, useSelector } from '@/redux/store';
import { updateActiveTags, updateSearch } from '@/slices/reportOptions';
import useReportOptions from '@/hooks/useReportOptions';
import useSearchQuery from '@/hooks/useSearchQuery';

function ReportOptionsSearchBar() {
   const dispatch = useDispatch();
   const search = useSelector((state) => state.reportOptions.search);

   const { appendTagQuery, removeTagQuery, tagQuery } = useSearchQuery();
   const onSubmit = () => {
      dispatch(updateActiveTags({ activeTags: [{ name: search, _id: search }] }));
      appendTagQuery(search);
   };

   const onChange = (event) => {
      dispatch(updateSearch({ search: event.target.value }));
   };

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
         }}
      >
         <section className="mb-5 flex w-full items-center justify-between rounded-md border-2">
            <input
               onChange={onChange}
               type="text"
               placeholder="ค้นหาแท็ก"
               className="border-none outline-none placeholder:text-text-lighter"
            />
            <button type="submit">
               <Icon icon="ic:sharp-search" className="h-6  w-6 text-text-lighter" />
            </button>
         </section>
      </form>
   );
}

export default ReportOptionsSearchBar;
