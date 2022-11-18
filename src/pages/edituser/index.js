import React from 'react';
import Layout from '@/layouts/index';
import ProfileSvg from '@/sections/editUserSvg/ProfileSvg';
import SwapProflie from '@/sections/editUserSvg/SwapProflie';
import BookIconColor from '@/sections/editUserSvg/BookIconColor';
import TimeIcon from '@/sections/editUserSvg/TimeIcon';
import StarIcon from '@/sections/editUserSvg/StarIcon';
import ExitIcon from '@/sections/editUserSvg/ExitIcon';
import Icon from '@/components/Icon';

const EditUser = () => (
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
                     <div className="flex ml-1 ">
                     <Icon icon="clarity:note-edit-solid" className="mr-2 text-primary" />
                     <span className="cursor-pointer text-primary">แก้ไขโปรไฟล์</span>
                  </div>
                  <div className="flex ">
                     <TimeIcon className="mr-2" />
                     <span className="cursor-pointer">ดูประวัติการแจ้งปัญหา</span>
                  </div>
                  <div className="flex ml-1 ">
                     <StarIcon className="mr-2" />
                     <span className="cursor-pointer">รีวิวการแก้ไขปัญหา</span>
                  </div>
               </section>

               <section className="mx-16 mt-40 ">
                  <div className="flex ml-1">
                     <ExitIcon className="mr-2 text-primary" />
                     <span className="text-red-500 underline cursor-pointer">ออกจากระบบ</span>
                  </div>
               </section>
            </div>
            <div className="h-[570px] w-[564px] rounded-lg border-x-2 border-gray-200 bg-white drop-shadow-md">
               <section className="flex flex-col bg-red-400 h-">
                  <div className="flex ">
                     <div>ชื่อผู้ใช้งาน</div>
                     <div>เว้นว่าง</div>
                  </div>
               </section>
            </div>
         </div>
      </section>
   );
EditUser.getLayout = (children) => {
   return <Layout variant="protected">{children}</Layout>;
};
export default EditUser;
