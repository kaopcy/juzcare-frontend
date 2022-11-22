import { useState } from 'react';
// layout
import Layout from '@/layouts/index';
// forms
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// apollo
import { useMutation } from '@apollo/client';
import { UpdateUserGQL } from '@/graphql/user.gql';
// hooks
import useUser from '@/hooks/useUser';
// stores
import { useDispatch } from '@/redux/store';
import { signInSuccess } from '@/redux/slices/user';
// components
import Loader from '@/svg/Loader';
import Icon from '@/components/Icon';
import InputText from '@/components/hookFormComponents/InputText';

const InputField = ({ label, name }) => {
   const [isEdiable, setIsEdiable] = useState(false);
   return (
      <div className="relative flex items-center gap-x-3">
         <span className="w-24 shrink-0 self-end text-lg">{label}</span>
         <InputText disabled={!isEdiable} className="h-10" name={name} />
         <button
            type="button"
            onClick={() => setIsEdiable((e) => !e)}
            className="absolute right-2 top-1/2 -translate-y-1/3"
         >
            <Icon className="" icon="ant-design:edit-outlined" />
         </button>
      </div>
   );
};

function EditUser() {
   const { user } = useUser();
   const dispatch = useDispatch();
   const [updateUserService, { loading }] = useMutation(UpdateUserGQL);
   /* ---------------------------------- form ---------------------------------- */
   const defaultValues = {
      username: user?.username ?? '',
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
   };

   const schema = yup.object().shape({
      email: yup.string().required('กรุณากรอกอีเมล์').email('กรุณาใช้อีเมล์ที่ถูกต้อง'),
      firstName: yup.string().required('กรุณากรอกชื่อ'),
      lastName: yup.string().required('กรุณากรอกนามสกุล'),
      username: yup.string().required('กรุณากรอกชื่อผู้ใช้'),
      phone: yup.string().required('กรุณากรอกเบอร์โทร'),
   });

   const methods = useForm({
      defaultValues,
      resolver: yupResolver(schema),
   });

   const onSubmit = async (value) => {
      try {
         const { data } = await updateUserService({
            variables: {
               userUserdata: {
                  ...value,
               },
            },
         });
         dispatch(signInSuccess({ user: data?.updateUser }));
      } catch (error) {
         console.log(error instanceof Error ? error.message : 'unknown error');
      }
   };

   return (
      <FormProvider {...methods}>
         <form
            className="relative flex min-h-[80vh] w-full max-w-[600px] flex-col items-center rounded-md border py-10 px-10 shadow-md"
            onSubmit={methods.handleSubmit(onSubmit)}
         >
            <h2 className="mt-6 mb-10">แก้ไขโปรไฟล์</h2>
            <div className="flex w-full flex-col gap-y-4">
               <InputField label="ชื่อผู้ใช้" name="username" />
               <InputField label="ชื่อ" name="firstName" />
               <InputField label="นามสกุล" name="lastName" />
               <InputField label="อีเมล" name="email" />
               <div className="flex items-end gap-x-3">
                  <span className="w-24 shrink-0 text-lg">รหัสผ่าน</span>
                  <a className="cursor-pointer text-primary underline">เปลี่ยนรหัสผ่าน</a>
               </div>
               <InputField label="เบอร์โทร" name="phone" />
            </div>
            <button className="mt-auto ml-auto rounded-md bg-primary px-4 py-1 text-paper shadow-md">บันทึก</button>
            {loading && (
               <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40">
                  <Loader className="h-10 w-10" />
               </div>
            )}
         </form>
      </FormProvider>
   );
}
EditUser.getLayout = (children) => (
   <Layout title="แก้ไขโปรไฟล์" variant="user">
      {children}
   </Layout>
);
export default EditUser;
