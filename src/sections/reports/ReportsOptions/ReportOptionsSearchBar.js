import { Icon } from '@iconify/react';
// store
import useSearchQuery from '@/hooks/useSearchQuery';
import { useDispatch, useSelector } from '@/redux/store';
import { updateActiveTags, updateSearch } from '@/slices/reportOptions';

function ReportOptionsSearchBar() {
   const dispatch = useDispatch();
   const search = useSelector((state) => state.reportOptions.search);

   const { appendTagQuery } = useSearchQuery();
   const onSubmit = (e) => {
      e.preventDefault();
      if (search.length === 0) return;
      dispatch(updateActiveTags({ activeTags: [{ name: search, _id: search }] }));
      appendTagQuery(search);
   };

   const onChange = (event) => {
      dispatch(updateSearch({ search: event.target.value }));
   };

   return (
      <form onSubmit={onSubmit}>
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
