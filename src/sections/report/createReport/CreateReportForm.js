import axios from 'axios';
//form
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
// components
import InputText from '@/components/hookFormComponents/InputText';
import TextField from '@/components/hookFormComponents/TextField';
// sections
import CreateReportTagInput from './CreateReportTagInput';
import CreateReportAddFile from './CreateReportAddFile';

function CreateReportForm() {
   const defaultValues = {
      topic: '',
      detail: '',
      tags: [],
      location: 0,
      filename: '',
   };

   const resolver = yup.object().shape({
      topic: yup.string().required('กรุณากรอกหัวข้อ'),
      detail: yup.string().required('กรุณากรอกรายละเอียด'),
      tags: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 แท็ก'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const onSubmit = (value) => {
      console.log(value);
   };

   const onUpload = async (e) => {
      const uploadPort = 3002;
      console.log(e.target.files[0]);

      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      console.log(formData.getAll('image'));
      const response = await axios.post(`http://localhost:${uploadPort}`, formData, {
         headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response);
   };

   return (
      <section className="flex w-full max-w-[800px] flex-col rounded-xl  border px-10 py-10 shadow-md">
         <FormProvider {...methods}>
            <form id="createReport" onSubmit={methods.handleSubmit(onSubmit)} />
            <div className="flex w-[700px]  flex-col items-center justify-center gap-y-6 ">
               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-32 whitespace-nowrap font-medium">หัวข้อ : </h4>
                  <div className="relative w-full justify-center lg:max-w-xl">
                     <InputText form="createReport" className="h-10" name="topic" />
                  </div>
               </header>
               <header className="flex w-full items-start gap-x-8">
                  <h4 className="w-32 whitespace-nowrap font-medium">รายละเอียด : </h4>
                  <div className="relative w-full justify-center lg:max-w-xl">
                     <TextField form="createReport" name="detail" />
                  </div>
               </header>

               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-32 whitespace-nowrap font-medium">แท็ก : </h4>
                  <CreateReportTagInput methods={methods} />
               </header>
               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-32 whitespace-nowrap font-medium">โลเคชั่น : </h4>
                  <div className="relative w-full justify-center lg:max-w-xl">
                     <select className="w-full h-10 appearance-none rounded-md border bg-white p-2.5  text-sm text-black shadow-sm outline-none focus:active:border-primary">
                        <option location="1">ตึกโหล</option>
                        <option location="2">ตึกพระเทพ</option>
                        <option location="3">โรงA</option>
                        <option location="4">หอสมุด</option>
                     </select>
                  </div>
               </header>
               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-32 whitespace-nowrap font-medium" />
                  <CreateReportAddFile />
               </header>
            </div>
            <button
               className="ml-auto rounded-md bg-primary px-10 py-2 text-paper shadow-md hover:bg-primary-dark"
               type="submit"
            >
               ยืนยัน
            </button>{' '}
         </FormProvider>
      </section>
   );
}

export default CreateReportForm;
