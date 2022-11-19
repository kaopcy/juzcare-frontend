import Image from '@/components/Image';

function ReportPostImageSlider() {
   return (
      <div className="flex ">
         <div className="relative aspect-[4/3] h-[200px] shrink-0">
            <Image alt="test" layout="fill" objectFit="cover" src="https://source.unsplash.com/L7EwHkq1B2s" />
         </div>
      </div>
   );
}

export default ReportPostImageSlider;
