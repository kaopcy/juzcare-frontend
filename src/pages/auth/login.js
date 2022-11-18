import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// redux
import { dispatch } from '@/redux/store';
import { startSighIn } from '@/slices/user';
// layout
import Layout from '@/layouts/index';
// components
import InputText from '@/components/InputText';
import GoogleLoginButton from '@/sections/login/GoogleLoginButton';
import Background from '@/sections/login/BackgroundLog';
import ErrorPageSvg from '@/sections/errorPage/ErrorPageSvg';
import Logo from '@/sections/login/Logo';
import IconGoogle from '@/sections/login/IconGoogle';
// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const Login = () => {
   const defaultValues = {
      email: '',
      password: '',
   };

   const resolver = yup.object().shape({
      email: yup.string().required('กรุณากรอกอีเมล์').email('กรุณาใช้อีเมล์ที่ถูกต้อง'),
      password: yup.string().required('กรุณากรอกรหัสผ่าน').min(8, 'รหัสผ่านต้องเกิน 8 ตัว'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const onSubmit = (value) => {
      dispatch(startSighIn({ value }));
      console.log(value);
   };

   const { formState } = methods;

   return (
      <div className="flex items-center justify-center w-full h-screen overflow-hidden scale-95 bg-paper-neutral">
         <div className="relative flex items-end w-full h-full md:ml-32">
            <section className="absolute z-10 flex flex-col p-10 -translate-x-1/2 rounded-md left-1/2 top-5 md:translate-x-0 md:left-0 bg-paper-neutral">
               <Logo className="mx-auto h-full w-[300px] " />
               <h1 className="self-center my-6 text-2xl">เข้าสู่ระบบ</h1>
               <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                     <section className="flex w-[350px] flex-col items-center justify-center gap-y-6 ">
                        <InputText label="อีเมล์" name="email" />
                        <InputText label="รหัสผ่าน" name="password" type="password" />

                        <button
                           className="my-3 w-full rounded-sm border-2 border-solid border-primary 
                                    bg-primary py-2.5 text-base text-paper 
                                    drop-shadow-md hover:bg-paper-neutral hover:text-primary
                                    active:border-primary"
                           type="submit"
                        >
                           เข้าสู่ระบบ
                        </button>
                     </section>
                  </form>

                  <div className="flex flex-col items-center justify-between w-full my-6 gap-y-6">
                     <GoogleLoginButton />

                     <Link href={PATH.auth.register}>
                        <button className="font-normal text-black underline text-md hover:text-primary" type="button">
                           สมัครใช้งาน
                        </button>
                     </Link>
                  </div>
               </FormProvider>
            </section>
            <div className="hidden h-full w-[1260px] shrink-0 opacity-70 md:block">
               <Background/>
               
            </div>
         </div>
      </div>
   );
};

Login.getLayout = (page) => (
   <Layout title="เข้าสู่ระบบ" variant="auth">
      {page}
   </Layout>
);

export default Login;
