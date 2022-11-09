import { useState } from 'react';
import { sortConfig , SORT_BY_LIKE } from '@/configs/reportConfig/reportSortOrder.config';

function ReportOptionsSort() {
   const [cur, setCur] = useState(SORT_BY_LIKE);
   return (
      <section className="flex w-full flex-col gap-y-1.5">
         <h3 className="text-primary underline">จัดเรียง</h3>
         {sortConfig.map((sort) => (
            <div key={sort._id} className=" flex items-center">
               <input
                  onChange={(e) => setCur(e.target.value)}
                  checked={cur === sort.value}
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
