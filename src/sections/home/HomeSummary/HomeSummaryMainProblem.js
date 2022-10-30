function HomeSummaryMainProblem() {
   return (
      <article className="flex aspect-[10/11] w-64 flex-col items-center justify-center rounded-md bg-paper ">
         <div className="relative mb-8 aspect-square w-28 rounded-full bg-primary ">
            <div className="absolute top-1/2 left-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper" />
            <div className="absolute top-1/2 left-[80%] h-[50%] w-4 -translate-y-1/2 -translate-x-1/2 rotate-90 bg-white" />
            <div className="absolute top-0 left-1/2 h-[50%] w-4 -translate-x-1/2 bg-white" />
         </div>
         <h1 className="mb-4">45 ปัญหา</h1>
         <h3 className="font-normal">ที่ตึกโหล</h3>
      </article>
   );
}

export default HomeSummaryMainProblem;
