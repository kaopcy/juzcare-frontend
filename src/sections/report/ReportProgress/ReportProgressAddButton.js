import Icon from '@/components/Icon';

ReportProgressAddButton.propTypes = {
   setIsAdd: () => {},
};

function ReportProgressAddButton({ setIsAdd }) {
   return (
      <div className="mt-10 flex items-center">
         <div className="h-[2px] w-full bg-text-lighter/60" />
         <button
            onClick={() => setIsAdd(true)}
            className="flex shrink-0 items-center gap-x-1 rounded-full border border-primary-dark px-3 py-2"
         >
            <Icon className="-ml-2 h-6 w-6 text-primary-dark" icon="carbon:add" />
            <span>อัปเดตความคืบหน้า</span>
         </button>
         <div className="h-[2px] w-full bg-text-lighter/60" />
      </div>
   );
}

export default ReportProgressAddButton;
