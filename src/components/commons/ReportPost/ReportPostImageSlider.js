import Image from 'next/image';

function ReportPostImageSlider() {
   return (
      <div className="flex ">
         <div className="aspect-[4/3] relative h-[200px] shrink-0">
            <Image alt="test" layout="fill" objectFit="cover" src="https://source.unsplash.com/L7EwHkq1B2s" />
         </div>
      </div>
   );
}

export default ReportPostImageSlider;
