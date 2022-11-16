import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// layout
import Layout from '@/layouts/index';

// components
import InputText from '@/components/hookFormComponents/InputText';
import Background from '@/sections/Register/BackgroundReg';
import Logo from '@/sections/login/Logo';

// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const Register = () => {
   const defaultValues = {
      email: '',
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      phone: '',
   };

   const resolver = yup.object().shape({
      email: yup.string().required('กรุณากรอกอีเมล์').email('กรุณาใช้อีเมล์ที่ถูกต้อง'),
      firstName: yup.string().required('กรุณากรอกชื่อ'),
      lastName: yup.string().required('กรุณากรอกนามสกุล'),
      username: yup.string().required('กรุณากรอกชื่อผู้ใช้'),
      password: yup.string().required('กรุณากรอกรหัสผ่าน').min(8, 'รหัสผ่านต้องไม่น้อยกว่า 8 ตัวอักษร'),
      phone: yup.string().required('กรุณากรอกเบอร์โทร'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const onSubmit = (value) => {
      console.log(value);
   };

   return (
      <div className="flex h-screen w-full scale-90 items-center justify-center bg-paper-neutral">
         <div className="relative mr-44 flex">
            <section className="absolute right-0 z-10 bg-paper-neutral p-8 ">
               <Logo className="absolute right-full mr-28 mt-10 w-[300px]" />
               <h1 className="mb-6 ml-28 ">ลงทะเบียน</h1>
               <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                     <section className="flex w-[380px]  flex-col items-center justify-center gap-y-4">
                        <InputText label="ชื่อผู้ใช้งาน" name="username" />
                        <InputText label="ชื่อ" name="firstName" />
                        <InputText label="นามสกุล" name="lastName" />
                        <InputText label="อีเมลล์" name="email" />
                        <InputText label="รหัสผ่าน" name="password" type="password" />
                        <InputText label="เบอร์โทร" name="phone" />

                        <button
                           className="my-3 w-full rounded-sm border-2 border-solid border-primary 
                                    bg-primary py-2.5 text-base text-paper 
                                    drop-shadow-md hover:bg-paper-neutral hover:text-primary
                                    active:border-primary"
                           type="submit"
                        >
                           ลงทะเบียน
                        </button>

                        <div className="w-full">
                           <Link href={PATH.auth.login}>
                              <button
                                 className="text-md font-normal text-black underline hover:text-primary"
                                 type="button"
                              >
                                 ย้อนกลับ
                              </button>
                           </Link>
                        </div>
                     </section>
                  </form>
               </FormProvider>
            </section>
            <div className="h-full w-[1260px] opacity-70">
               <Background />
            </div>
         </div>
      </div>
   );
};

Register.getLayout = (page) => (
   <Layout title="สมัครใช้งาน" variant="auth">
      {page}
   </Layout>
);

export default Register;
