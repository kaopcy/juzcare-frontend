import React from 'react';
import Layout from '@/layouts/index';
import ProfileSvg from '@/sections/editUserSvg/ProfileSvg';
import SwapProflie from '@/sections/editUserSvg/SwapProflie';
import Icon from '@/components/Icon';


const History = () => (
   <section className="relative flex items-center justify-center h-screen bg-white">
      <div className="flex gap-4 mb-24 ">
         <div className=" h-[570px] w-[342px] rounded-lg border-x-2 border-gray-200 bg-white drop-shadow-md">
            <section className="mt-10 ml-28 ">
               <ProfileSvg className="absolute " />
               <span className="absolute font-bold top-44 ml-7">User1012</span>
               <button className="absolute mt-24 ml-24 top-12 ">
                  <SwapProflie />
               </button>
            </section>

            <section className="flex flex-col gap-4 mx-16 mt-60 ">
               <div className="flex ml-1 cursor-pointer">
                  <Icon icon="clarity:note-edit-solid" className="w-5 h-5 mr-2 " />
                  <span className="cursor-pointer ">แก้ไขโปรไฟล์</span>
               </div>
               <div className="flex cursor-pointer">
                  <Icon icon="ic:baseline-history" className="w-5 h-5 ml-1 mr-2 text-primary" />
                  <span className="cursor-pointer text-primary">ดูประวัติการแจ้งปัญหา</span>
               </div>
               <div className="flex ml-1 cursor-pointer ">
                  <Icon icon="akar-icons:star" className="w-5 h-5 mr-2" />
                  <span className="">รีวิวการแก้ไขปัญหา</span>
               </div>
            </section>

            <section className="mx-16 mt-40 ">
               <div className="flex ml-1 cursor-pointer">
                  <Icon icon="clarity:sign-out-solid" className="w-5 h-5 mr-2 text-red-600"/>
                  <span className="text-red-500 underline ">ออกจากระบบ</span>
               </div>
            </section>
         </div>
         <div className="h-[570px] w-[564px] rounded-lg border-x-2 border-gray-200 bg-white drop-shadow-md">
         อิอิ
         </div>
      </div>
   </section>
);
History.getLayout = (children) => <Layout variant="protected">{children}</Layout>;
export default History;
