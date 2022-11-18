import axios from 'axios';
//form
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
// hooks
import useUploadFiles from '@/hooks/useUploadFiles';
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
      media: [],
   };

   const resolver = yup.object().shape({
      topic: yup.string().required('กรุณากรอกหัวข้อ'),
      detail: yup.string().required('กรุณากรอกรายละเอียด'),
      tags: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 แท็ก'),
      media: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 ไฟล์'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const { response, error, isLoading, upload } = useUploadFiles();

   const onSubmit = async (value) => {
      upload(value.media);
   };

   return (
      <section className="flex w-full max-w-[800px] flex-col rounded-xl  border px-10 py-10 shadow-md">
         <FormProvider {...methods}>
            <form id="createReport" onSubmit={methods.handleSubmit(onSubmit)} />
            <div className="flex w-full flex-col items-center justify-center gap-y-6 ">
               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32">หัวข้อ : </h4>
                  <div className="relative w-full justify-center">
                     <InputText form="createReport" className="h-10" name="topic" />
                  </div>
               </header>
               <header className="flex w-full items-start gap-x-8">
                  <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32">รายละเอียด : </h4>
                  <div className="relative w-full justify-center">
                     <TextField form="createReport" className="h-20" name="detail" />
                  </div>
               </header>

               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32">แท็ก : </h4>
                  <CreateReportTagInput methods={methods} />
               </header>
               <header className="flex w-full items-center gap-x-8">
                  <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32">โลเคชั่น : </h4>
                  <div className="relative w-full justify-center">
                     <select className="h-10 w-full appearance-none rounded-md border bg-white p-2.5  text-sm text-black shadow-sm outline-none focus:active:border-primary">
                        <option location="1">ตึกโหล</option>
                        <option location="2">ตึกพระเทพ</option>
                        <option location="3">โรงA</option>
                        <option location="4">หอสมุด</option>
                     </select>
                  </div>
               </header>
               <header className="flex w-full items-center gap-x-8 ">
                  <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32" />
                  <CreateReportAddFile methods={methods} />
                  {isLoading && <div className="">loading</div>}
               </header>
            </div>
            <button
               form="createReport"
               className="ml-auto mt-10 rounded-md bg-primary px-10 py-2 text-paper shadow-md hover:bg-primary-dark"
               type="submit"
            >
               ยืนยัน
            </button>
         </FormProvider>
      </section>
   );
}

export default CreateReportForm;
