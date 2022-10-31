import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// layout
import Layout from '@/layouts/index';

// components
import InputText from '@/components/InputText';
import GoogleLoginButton from '@/sections/login/GoogleLoginButton';
import Background from '@/sections/login/BackgroundLog';
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
        console.log(value);
    };

    const { formState } = methods;

    return (
        <div className="flex items-center justify-center w-full h-screen scale-90 bg-paper-neutral">
            <div className="relative flex items-end ml-32">
                <section className="absolute z-10 flex flex-col p-10 rounded-md bg-paper-neutral top-5">
                    <Logo className="w-[300px] h-full mx-auto " />
                    <h1 className="self-center my-6 text-2xl">เข้าสู่ระบบ</h1>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <section className="flex flex-col items-center justify-center gap-y-6 w-[350px] ">
                                <InputText label="อีเมล์" name="email" />
                                <InputText label="รหัสผ่าน" name="password" type="password" />

                                <button
                                    className="w-full py-2.5 my-3 text-base rounded-sm bg-primary 
                                    text-paper drop-shadow-md hover:bg-paper-neutral hover:text-primary 
                                    border-solid border-2 border-primary
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
                                <button
                                    className="font-normal text-black underline text-md hover:text-primary"
                                    type="button"
                                >
                                    สมัครใช้งาน
                                </button>
                            </Link>
                        </div>
                    </FormProvider>
                </section>
                <div className="w-[1260px] h-full opacity-70">
                    <Background />
                </div>
            </div>
        </div>
    );
};

Login.getLayout = (page) => (
    <Layout title="เข้าสู่ระบบ" variant="unauthenticated">
        {page}
    </Layout>
);

export default Login;
