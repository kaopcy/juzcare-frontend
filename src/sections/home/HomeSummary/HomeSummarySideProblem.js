import React from 'react';

function HomeSummarySideProblem() {
   return (
      <article className="hidden aspect-[10/11] w-52 flex-col items-center justify-center rounded-md bg-paper md:flex ">
         <h1 className="mb-1">45 ปัญหา</h1>
         <h3 className="mb-4 font-normal">ที่ตึกโหล</h3>
         <div className="relative  aspect-square w-16 rounded-full bg-text ">
            <div className="absolute top-1/2 left-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper" />
            <div className="absolute top-1/2 left-[80%] h-[50%] w-2 -translate-y-1/2 -translate-x-1/2 rotate-90 bg-white" />
            <div className="absolute top-0 left-1/2 h-[50%] w-2 -translate-x-1/2 bg-white" />
         </div>
      </article>
   );
}

export default HomeSummarySideProblem;
