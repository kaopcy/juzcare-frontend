import React from 'react';
// form
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// layout
import Layout from '@/layouts/index';

// components
import InputText from '@/components/InputText';

const Register = () => {
    const defaultValues = {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    };

    const resolver = yup.object().shape({
        email: yup.string().required('email is required').email('email not in correct form'),
        firstName: yup.string().required('firstname is required'),
        lastName: yup.string().required('lastname is required'),
        username: yup.string().required('username is required'),
        password: yup.string().required('password is required').min(8),
    });

    const methods = useForm({
        resolver: yupResolver(resolver),
        defaultValues,
    });

    const onSubmit = (value) => {
        console.log(value);
    };

    return (
        <div className="bg-paper-neutral w-full h-screen flex flex-col items-center justify-center">
            <h1 className="mb-6">สมัครใช้งาน</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <section className="flex flex-col  items-center justify-center gap-y-4 w-[250px]">
                        <InputText label='โย่วๆ' name="username" />
                        <InputText label='โย่วๆ' name="email" />
                        <InputText label='โย่วๆ' name="password" />
                        <InputText label='โย่วๆ' name="firstName" />
                        <InputText label='โย่วๆ' name="lastName" />
                        <div className="flex items-center justify-between w-full my-4">
                            <button className="text-base" type="button">
                                ย้อนกลับ
                            </button>
                            <button className="px-8 py-1 bg-primary rounded-md text-white font-semibold" type="submit">
                                สมัคร
                            </button>
                        </div>
                    </section>
                </form>
            </FormProvider>
        </div>
    );
};

Register.getLayout = (page) => (
    <Layout title="สมัครใช้งาน" variant="unauthenticated">
        {page}
    </Layout>
);

export default Register;
