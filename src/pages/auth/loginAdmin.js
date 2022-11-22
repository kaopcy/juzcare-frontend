import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// redux
import { dispatch, useSelector } from '@/redux/store';
import { startSignIn, startSignInAdmin } from '@/slices/user';
// layout
import Layout from '@/layouts/index';
// components
import InputText from '@/components/hookFormComponents/InputText';
import Background from '@/components/AuthBackground';
import Loader from '@/svg/Loader';
// sections
import Logo from '@/sections/auth/Logo';
import GoogleLoginButton from '@/sections/auth/GoogleLoginButton';
import AuthResponseError from '@/sections/auth/AuthResponseError';
// Path
import Link from 'next/link';
import { PATH } from '@/routes/index';

const LoginAdmin = () => {
   const { isLoading, error } = useSelector((state) => state.user);

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
      dispatch(startSignInAdmin({ ...value }));
   };

   return (
      <div className="relative mx-auto flex h-screen w-full max-w-[1000px] items-center justify-center px-4 ">
         <div className="relative flex w-full items-end justify-center md:justify-start">
            <div className="absolute bottom-0 left-0 hidden w-full md:block">
               <Background className="opacity-70" />
            </div>
            <section className="z-10 flex flex-col bg-paper px-4 md:px-8">
               <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                     <section className="flex w-[400px]  flex-col items-center justify-center gap-y-6 ">
                        <Logo className="mx-auto h-full w-[60%] " />
                        <h1 className="mb-4 self-center text-3xl font-bold tracking-wide">เข้าสู่ระบบ</h1>

                        {error && <AuthResponseError error={error} />}
                        <div className="flex w-full gap-x-4">
                           <InputText label="อีเมล์" name="email" />
                           <InputText label="รหัสผ่าน" name="password" type="password" />
                        </div>

                        <button
                           className="mt-3 w-full rounded-lg border-2 border-solid border-primary 
                                     bg-primary py-2.5 text-base tracking-wider 
                                     text-paper drop-shadow-md hover:bg-paper-neutral
                                     hover:text-primary active:border-primary"
                           type="submit"
                        >
                           {isLoading ? <Loader className="mx-auto h-6 w-6" /> : 'เข้าสู่ระบบ'}
                        </button>
                     </section>
                  </form>
                  <div className="flex w-full items-center ">
                     <span className="h-[1px] w-full bg-text-lighter/60 " />
                     <span className="mx-3 my-6 text-xs text-text-light">หรือ</span>
                     <span className="h-[1px] w-full bg-text-lighter/60 " />
                  </div>
                  <div className="flex w-full flex-col items-center justify-between gap-y-6">
                     <GoogleLoginButton />
                     <div className="flex items-end text-base">
                        <span className="mr-4">ยังไม่มีบัญชี?</span>
                        <Link href={PATH.auth.register}>
                           <a className="font-medium text-primary underline hover:text-primary">สมัครใช้งาน</a>
                        </Link>
                     </div>
                  </div>
               </FormProvider>
            </section>
         </div>
      </div>
   );
};

LoginAdmin.getLayout = (page) => (
   <Layout title="เข้าสู่ระบบ" variant="auth">
      {page}
   </Layout>
);

export default LoginAdmin;
