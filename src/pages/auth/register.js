import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// store
import { useDispatch, useSelector } from '@/redux/store';
import { startRegister } from '@/slices/user';
// layout
import Layout from '@/layouts/index';
// components
import InputText from '@/components/hookFormComponents/InputText';
import Background from '@/components/AuthBackground';
// sections
import AuthResponseError from '@/sections/auth/AuthResponseError';
import Logo from '@/sections/auth/Logo';
import Loader from '@/svg/Loader';
// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const Register = () => {
   const { isLoading, error } = useSelector((state) => state.user);
   const dispatch = useDispatch();

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
      const registerData = {
         ...value,
         emailType: 'normal',
         role: 'user',
      };
      dispatch(startRegister({ ...registerData }));
   };

   return (
      <div className="relative mx-auto flex h-screen w-full max-w-[1000px] items-center justify-center px-4 ">
         <div className="relative flex items-end justify-center w-full md:justify-end">
            <div className="absolute bottom-0 left-0 hidden w-full md:block">
               <Background className="opacity-70" />
               <Logo className="absolute  -top-5  z-10 mr-28 w-[30%] md:left-[14%]" />
            </div>
            <section className="z-10 flex flex-col items-center px-8 gap-y-7 bg-paper-neutral">
               <h1 className="text-3xl font-bold md:text-3xl">ลงทะเบียน</h1>
               {error && <AuthResponseError error={error} />}
               <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                     <section className="flex flex-col items-center justify-center gap-y-7">
                        <InputText className="h-14" label="ชื่อผู้ใช้งาน" name="username" />
                        <div className="flex w-full gap-x-4">
                           <InputText className="h-14" label="ชื่อ" name="firstName" />
                           <InputText className="h-14" label="นามสกุล" name="lastName" />
                        </div>
                        <InputText className="h-14" label="อีเมลล์" name="email" />
                        <div className="flex w-full gap-x-4">
                           <InputText className="h-14" label="รหัสผ่าน" name="password" type="password" />
                           <InputText className="h-14" label="เบอร์โทร" name="phone" />
                        </div>

                        <button
                           className="mt-6 w-full rounded-lg border-2 border-solid border-primary bg-primary 
                                    py-2.5 text-base tracking-wider text-paper 
                                    shadow-md  hover:bg-paper-neutral hover:text-primary
                                    active:border-primary"
                           type="submit"
                        >
                           {isLoading ? <Loader className="w-6 h-6 mx-auto" /> : 'ลงทะเบียน'}
                        </button>
                        <div className="flex items-end text-base">
                           <span className="mr-4">มีบัญชีอยู่แล้ว?</span>
                           <Link href={PATH.auth.login}>
                              <a className="font-medium underline text-primary hover:text-primary">เข้าสู่ระบบ</a>
                           </Link>
                        </div>
                     </section>
                  </form>
               </FormProvider>
            </section>
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
