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

// components
import InputText from '@/components/InputText';
import ProfileIcon from '@/components/navbar/profileIcon';

// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const createPost = () => {
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
      <div className="flex space-x-20 items-center justify-center w-full h-screen scale-90 pl-10  bg-paper-neutral">
      
        <div class = " relative h-full w-80  ">
        <div class="absolute left-0 top-0 h-80 w-80 p-11">

        <ProfileIcon/> 
      
            </div>
            
            </div>
            {/* </div> */}
       
        <div className="flex items-center justify-center h-[80vh   ">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <section className="flex flex-col  items-center justify-center gap-y-1 w-[700px] ">
                  <header className="flex items-center justify-between w-full mb-10 text-black h-[5vh"><h5>หัวข้อ : </h5>
                  < div className="relative w-full justify-center lg:max-w-xl">
                  <InputText name="topic" /> 
                  </div>
                  
                  </header>
                  <header className="flex items-center justify-between w-full mb-10 text-black h-[5vh"><h5>รายละเอียด : </h5>
                  < div className="relative w-full justify-center lg:max-w-xl" >
                  <InputText  name="detail"  />
                  
                  </div>
                  
                  
                  </header>
                  

                      <header className="flex items-center justify-between w-full mb-10 text-black h-[5vh"><h5>แท็ก : </h5></header>
                      <header className="flex items-center justify-between h-2 mt-5 mb-1 w-full  text-black  " ><HomeTagSlider /></header>
         <header className="flex items-center justify-between w-full  text-black h-[5vh pb-4"><h5>โลเคชั่น : </h5>
        <div className="relative w-full justify-center lg:max-w-xl">
            <select className="w-full p-2.5 text-black bg-white border  rounded-md shadow-sm outline-none appearance-none focus:active:border-primary">
                <option location = '1'>ตึกโหล</option>
                <option location = '2'>ตึกพระเทพ</option>
                <option location = '3'>โรงA</option>
                <option location = '4'>หอสมุด</option>
            </select>
        </div>
         </header>

         <input class="block w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-white-400 focus:outline-none dark:bg-primary-300 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

        
         </section>

         
      
         <p align="right">

                      <button className="w-20  py-2.5 my-3 text-base rounded-sm bg-primary 
                                  text-paper drop-shadow-md hover:bg-paper-neutral hover:text-primary 
                                  border-solid border-2 border-primary
                                  active:border-primary"
                                  type="submit"
                              >
                                  ยืนยัน
                              </button> </p>        





 {/* <Link  href = '/'>
                      <p align="left">
                          <button className="font-normal text-black underline text-md hover:text-primary" type="button">
                              ย้อนกลับ
                          </button></p>
                      </Link>           */}
                      


               
              </form>


          </FormProvider>
          {/* <profileIcon/> */}
         
        </div>
     
        

       </div>

          

       
  );

   
};

createPost.getLayout = (page) => (
   <Layout variant="protected" title="สร้างโพสต์">
      {page}
   </Layout>
);

export default createPost;