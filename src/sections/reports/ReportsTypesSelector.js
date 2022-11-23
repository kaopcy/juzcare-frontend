import { useCallback, useState } from 'react';
import { classname } from '@/utils/getClassName';
import { useDispatch } from '@/redux/store';
import useSearchQuery from '@/hooks/useSearchQuery';
import { toggleOrder, updateSort } from '@/redux/slices/reportOptions';
import { DESCENDING } from '@/configs/reportConfig/reportSortOrder.config';

function ReportsTypesSelector() {
   const [_mockSeletor, set_mockSeletor] = useState('latest');
   const { replaceSort, replaceOrder } = useSearchQuery();
   const dispatch = useDispatch();

   const onClick = (e) => {
      e.preventDefault();
      if (e.target.value === 'popular') {
         replaceSort('SORT_BY_LIKE');
         dispatch(updateSort({ sort: 'SORT_BY_LIKE' }));
         replaceOrder(DESCENDING);
         dispatch(toggleOrder());
      } else {
         replaceSort('SORT_BY_TIME');
         dispatch(updateSort({ sort: 'SORT_BY_TIME' }));
         replaceOrder(DESCENDING);
         dispatch(toggleOrder());
      }
      set_mockSeletor(e.target.value);
   };

   const isLatest = useCallback(() => 'latest' === _mockSeletor, [_mockSeletor]);

   return (
      <div className="sticky top-navbar z-10 mb-5  box-content flex w-full border-b-[3px] border-b-text-lighter bg-paper/60 pt-2 backdrop-blur-md">
         <button
            onClick={onClick}
            value="latest"
            className={classname('w-full py-2 text-lg  ', isLatest() ? ' text-primary' : 'font-normal text-text')}
         >
            ล่าสุด
         </button>
         <button
            onClick={onClick}
            value="popular"
            className={classname('w-full py-2 text-lg  ', !isLatest() ? ' text-primary' : 'font-normal text-text')}
         >
            ยอดนิยม
         </button>
         <div
            className={classname(
               'absolute top-full h-[3px] w-1/2 bg-primary transition-transform',
               !isLatest() && 'translate-x-full',
            )}
         />
      </div>
   );
}

export default ReportsTypesSelector;
