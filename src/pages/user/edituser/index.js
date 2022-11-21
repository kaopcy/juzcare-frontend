import React from 'react';
import Layout from '@/layouts/index';
import Option from '@/sections/editUserSvg/Option';

const EditUser = () => (
   <section className="relative flex items-center justify-center h-screen bg-white">
      <div className="flex gap-4 mb-24 ">
      <Option/>
         <div className="h-[570px] w-[564px] rounded-lg border-x-2 border-gray-200 bg-white drop-shadow-md">
            <section className="flex flex-col p-4 mt-10 gap-7">
               <div className="flex ">
                  <div className='ml-10 mr-5'>ชื่อผู้ใช้งาน</div>
                
               </div>
               <div className="flex ">
                  <div className='ml-10 mr-5'>ชื่อ</div>
                  <div>เว้นว่าง</div>
               </div>
               <div className="flex ">
                  <div className='ml-10 mr-5'>นามสกุล</div>
                  <div>เว้นว่าง</div>
               </div>
               <div className="flex ">
                  <div className='ml-10 mr-5'>อีเมลล์</div>
                  <div>เว้นว่าง</div>
               </div>
               <div className="flex ">
                  <div className='ml-10 mr-5'>รหัสผ่าน</div>
                  <div>เว้นว่าง</div>
               </div>
               <div className="flex ">
                  <div className='ml-10 mr-5'>เบอร์โทร</div>
                  <div>เว้นว่าง</div>
               </div>
            </section>
         </div>
      </div>
   </section>
);
EditUser.getLayout = (children) => <Layout variant="protected">{children}</Layout>;
export default EditUser;
