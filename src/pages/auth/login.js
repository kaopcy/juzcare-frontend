import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// layout
import Layout from '@/layouts/index';

// components
import InputText from '@/components/InputText';
import Background from '@/sections/login/Background';
import GoogleLoginButton from '@/sections/login/GoogleLoginButton';

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
        <div className="relative  flex h-screen w-full items-center  justify-center  overflow-hidden bg-paper">
            <div className="absolute left-1/2 bottom-10  z-10 w-[1100px] -translate-x-1/2 opacity-60 blur-[1px]">
                <Background />
            </div>
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-[100%] -translate-y-[35%] items-end">
                <section className="flex flex-col  rounded-md p-10  ">
                    <h2 className="mb-3 self-center font-black">เข้าสู่ระบบ</h2>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <section className="flex w-[300px]  flex-col items-center  justify-center gap-y-2">
                                <InputText label="อีเมล์" name="email" />
                                <InputText label="รหัสผ่าน" name="password" />
                                <div className="my-4 mb-10 flex w-full flex-col items-center justify-between gap-y-4">
                                    <button
                                        className="w-full rounded-md bg-primary py-3 text-base text-paper"
                                        type="submit"
                                    >
                                        เข้าสู่ระบบ
                                    </button>
                                </div>
                                <GoogleLoginButton />
                                <button className="mt-4 text-sm font-normal text underline " type="button">
                                    สมัครใช้งาน
                                </button>
                            </section>
                        </form>
                    </FormProvider>
                </section>
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
