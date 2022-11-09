import { useCallback, useState } from 'react';
import { classname } from '@/utils/getClassName';

function ReportsTypesSelector() {
   const [_mockSeletor, set_mockSeletor] = useState('latest');
   const onClick = (e) => {
      e.preventDefault();
      set_mockSeletor(e.target.value);
   };

   const isLatest = useCallback(() => 'latest' === _mockSeletor, [_mockSeletor]);

   return (
      <div className="relative mb-5 box-content flex w-full border-b-[3px] border-b-text-lighter">
         <button
            onClick={onClick}
            value="latest"
            className={classname(
               'w-full py-2 text-lg  ',
               isLatest() ? 'font-semibold text-primary' : 'font-normal text-text',
            )}
         >
            ล่าสุด
         </button>
         <button
            onClick={onClick}
            value="popular"
            className={classname(
               'w-full py-2 text-lg  ',
               !isLatest() ? 'font-semibold text-primary' : 'font-normal text-text',
            )}
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
