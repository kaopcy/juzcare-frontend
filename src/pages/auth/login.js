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

const Login = () => {
    const defaultValues = {
        email: '',
        password: '',
    };

    const resolver = yup.object().shape({
        email: yup.string().required('กรุณากรอกอีเมล์').email('กรุณาใช้อีเมล์ที่ถูกต้อง'),
        password: yup.string().required('กรุณากรอกรหัสผ่าน').min(8,'รหัสผ่านต้องเกิน 8 ตัว'),
    });

    const methods = useForm({
        resolver: yupResolver(resolver),
        defaultValues,
    });

    const onSubmit = (value) => {
        console.log(value);
    };

    return (
        <div className="bg-paper-neutral w-full h-screen flex  items-center justify-center">
            <div className="flex items-end">
                <section className="flex flex-col bg-[#FFF1E0] p-10 rounded-md  ">
                    <h1 className="mb-6 self-center">เข้าสู่ระบบ</h1>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <section className="flex flex-col  items-center justify-center gap-y-4 w-[300px]">
                                <InputText label="อีเมล์" name="email" />
                                <InputText label="รหัสผ่าน" name="password" />
                                <div className="flex items-center flex-col justify-between w-full my-4 gap-y-4">
                                    <button
                                        className="w-full py-2 rounded-md bg-primary text-paper text-base"
                                        type="submit"
                                    >
                                        เข้าสู่ระบบ
                                    </button>
                                    <button className="text-sm underline font-normal text-light " type="button">
                                        ย้อนกลับ
                                    </button>
                                </div>
                            </section>
                        </form>
                    </FormProvider>
                </section>
                <div className="w-[700px] h-full ">
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
