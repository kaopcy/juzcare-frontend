import { useState } from 'react';
import { statusRadios } from '@/configs/reportConfig/reportStatus.config';

function ReportOptionsFilter() {
   const [cur, setCur] = useState('WAITING');
   return (
      <section className="flex w-full flex-col gap-y-1.5 mb-5">
         <h3 className="text-primary underline">สถานะ</h3>
         {statusRadios.map((radio) => (
            <div key={radio._id} className=" flex items-center">
               <input
                  onChange={(e) => setCur(e.target.value)}
                  checked={cur === radio.value}
                  id={radio._id}
                  type="radio"
                  value={radio.value}
                  name="default-radio"
                  className="h-3 w-3  bg-gray-100  accent-[#ff6202]"
               />
               <label htmlFor={radio._id} className="ml-2 text-sm text-text cursor-pointer ">
                  {radio.label}
               </label>
            </div>
         ))}
      </section>
   );
}

export default ReportOptionsFilter;
