import { Icon } from '@iconify/react';

function ReportOptionsSearchBar() {
   return (
      <section className="flex w-full items-center justify-between rounded-md border-2 mb-5">
         <input
            type="text"
            placeholder="ค้นหาแท็ก"
            className="border-none outline-none placeholder:text-text-lighter"
         />
         <Icon icon="ic:sharp-search" className="h-10  w-10 text-text-lighter" />
      </section>
   );
}

export default ReportOptionsSearchBar;
