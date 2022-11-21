import { useState } from 'react';
// configs
import { statusRadios } from '@/configs/reportConfig/reportStatus.config';
// store
import { useDispatch, useSelector } from '@/redux/store';
import { updateFilter } from '@/slices/reportOptions';
// hooks
import useSearchQuery from '@/hooks/useSearchQuery';

function ReportOptionsFilter() {
   const { replaceFilter } = useSearchQuery();
   const filter = useSelector((state) => state.reportOptions.filter);
   const dispatch = useDispatch();

   const onChange = (event) => {
      replaceFilter(event.target.value);
      dispatch(updateFilter({ filter: event.target.value }));
   };

   return (
      <section className="mb-5 flex w-full flex-col gap-y-1.5">
         <h3 className="text-primary underline">สถานะ</h3>
         <div className=" flex items-center">
            <input
               onChange={onChange}
               checked={filter == ''}
               id={'all'}
               type="radio"
               value={''}
               name="default-radio"
               className="h-3 w-3  bg-gray-100  accent-[#ff6202]"
            />
            <label htmlFor={'all'} className="ml-2 cursor-pointer text-sm text-text ">
               ทั้งหมด
            </label>
         </div>
         {statusRadios.map((radio) => (
            <div key={radio._id} className=" flex items-center">
               <input
                  onChange={onChange}
                  checked={filter === radio.value}
                  id={radio._id}
                  type="radio"
                  value={radio.value}
                  name="default-radio"
                  className="h-3 w-3  bg-gray-100  accent-[#ff6202]"
               />
               <label htmlFor={radio._id} className="ml-2 cursor-pointer text-sm text-text ">
                  {radio.label}
               </label>
            </div>
         ))}
      </section>
   );
}

export default ReportOptionsFilter;
