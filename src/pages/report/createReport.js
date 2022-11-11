import React from 'react';
import Layout from '@/layouts/index';
import Image from 'next/image';
// import dropdownLocation from '@/pages/post/dropdownLocation';

//from
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//sections
import HomeTagSlider from '@/sections/home/HomeTags/HomeTagSlider';
import ProfileIconReport from '@/sections/reportProfile/ProfileIconReport/ProfileIconReport';

// components
import InputText from '@/components/InputText';
import ProfileIcon from '@/components/navbar/profileIcon';

// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const CreateReport = () => {
   const defaultValues = {
      topic: '',
      detail: '',
      tag: '',
      location: 0,
      filename: '',
   };

   const resolver = yup.object().shape({
      topic: yup.string().required('กรุณากรอกหัวข้อ'),
      details: yup.string().required('กรุณากรอกรายละเอียด'),
      tag: yup.string().required('กรุณาเลือกแท็ก'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const onSubmit = (value) => {
      console.log(value);
   };

   return (
      //bg-paper-neutral
      <div className="flex h-screen w-full scale-90 items-center justify-center space-x-20 bg-paper-neutral  pl-10">
         <div class=" bg-pink-99 relative h-full  w-80 ">
            <div class="absolute left-0 top-0 h-80 w-80 p-11">
               <ProfileIconReport />
            </div>
         </div>
         {/* </div> */}

         <div className="h-[80vh flex items-center justify-center   ">
            <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <section className="flex w-[700px]  flex-col items-center justify-center gap-y-1 ">
                     <header className="h-[5vh mb-10 flex w-full items-center justify-between text-black">
                        <h5>หัวข้อ : </h5>
                        <div className="relative w-full justify-center lg:max-w-xl">
                           <InputText name="topic" />
                        </div>
                     </header>
                     <header className="h-[5vh mb-10 flex w-full items-center justify-between text-black">
                        <h5>รายละเอียด : </h5>
                        <div className="relative w-full justify-center lg:max-w-xl">
                           <InputText name="detail" />
                        </div>
                     </header>

                     <header className="h-[5vh mb-10 flex w-full items-center justify-between text-black">
                        <h5>แท็ก : </h5>
                     </header>
                     <header className="mt-5 mb-1 flex h-2 w-full items-center justify-between  text-black  ">
                        <HomeTagSlider />
                     </header>
                     <header className="h-[5vh flex w-full items-center  justify-between pb-4 text-black">
                        <h5>โลเคชั่น : </h5>
                        <div className="relative w-full justify-center lg:max-w-xl">
                           <select className="w-full appearance-none rounded-md border bg-white  p-2.5 text-black shadow-sm outline-none focus:active:border-primary">
                              <option location="1">ตึกโหล</option>
                              <option location="2">ตึกพระเทพ</option>
                              <option location="3">โรงA</option>
                              <option location="4">หอสมุด</option>
                           </select>
                        </div>
                     </header>

                     <input
                        class="text-black-900 dark:text-white-400 dark:bg-primary-300 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                     />
                  </section>

                  <p align="right">
                     <button
                        className="my-3  w-20 rounded-sm border-2 border-solid border-primary 
                                  bg-primary py-2.5 text-base text-paper 
                                  drop-shadow-md hover:bg-paper-neutral hover:text-primary
                                  active:border-primary"
                        type="submit"
                     >
                        ยืนยัน
                     </button>{' '}
                  </p>
                  {/* <Link  href = '/'>
                      <p align="left">
                          <button className="font-normal text-black underline text-md hover:text-primary" type="button">
                              ย้อนกลับ
                          </button></p>
                      </Link>           */}
               </form>
            </FormProvider>
         </div>
      </div>
   );
};

CreateReport.getLayout = (page) => (
   <Layout variant="protected" title="สร้างโพสต์">
      {page}
   </Layout>
);

export default CreateReport;
