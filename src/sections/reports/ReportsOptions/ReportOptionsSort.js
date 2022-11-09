import { useState } from 'react';
// configs
import { sortConfig, ASCENDING } from '@/configs/reportConfig/reportSortOrder.config';
// store
import { useDispatch, useSelector } from '@/redux/store';
import { updateSort, toggleOrder } from '@/slices/reportOptions';
import Icon from '@/components/Icon';
import { classname } from '@/utils/getClassName';

function ReportOptionsSort() {
   const dispatch = useDispatch();
   const sortBy = useSelector((state) => state.reportOptions.sort);
   const orderBy = useSelector((state) => state.reportOptions.order);
   const onRadioChange = (event) => {
      dispatch(updateSort({ sort: event.target.value }));
   };

   const onOrderButtonClick = () => {
      dispatch(toggleOrder());
   };

   return (
      <section className="flex w-full flex-col gap-y-1.5">
         <div className="flex w-full items-center justify-between">
            <h3 className="text-primary underline">จัดเรียง</h3>
            <button className='hover:bg-gray-500/10 p-1 rounded-full' onClick={onOrderButtonClick}>
               <Icon
                  className={classname(
                     'h-5 w-5 transition-transform ',
                     orderBy === ASCENDING ? 'rotate-0' : 'rotate-180',
                  )}
                  icon="bx:sort-up"
               />
            </button>
         </div>
         {sortConfig.map((sort) => (
            <div key={sort._id} className=" flex items-center">
               <input
                  onChange={onRadioChange}
                  checked={sortBy === sort.value}
                  id={sort._id}
                  type="radio"
                  value={sort.value}
                  name={sort._id}
                  className="h-3 w-3  bg-gray-100  accent-[#ff6202]"
               />
               <label htmlFor={sort._id} className="ml-2 cursor-pointer text-sm text-text ">
                  {sort.label}
               </label>
            </div>
         ))}
      </section>
   );
}

export default ReportOptionsSort;
