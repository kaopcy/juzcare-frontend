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
import CreateReportSelectLocation from './CreateReportSelectLocation';

function CreateReportForm() {
   const defaultValues = {
      topic: '',
      detail: '',
      tags: [],
      location: '',
      media: [],
   };

   const resolver = yup.object().shape({
      topic: yup.string().required('กรุณากรอกหัวข้อ'),
      detail: yup.string().required('กรุณากรอกรายละเอียด'),
      tags: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 แท็ก'),
      media: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 ไฟล์'),
      location: yup.string().required('กรุณาเลือกสถานที่'),
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
      <div className="flex w-full max-w-[800px] flex-col items-center gap-y-10">
         <h1>ตั้งกระทู้ใหม่</h1>
         <section className="flex  w-full flex-col  rounded-xl border px-10 py-10 shadow-md">
            <FormProvider {...methods}>
               <form id="createReport" onSubmit={methods.handleSubmit(onSubmit)} />
               <div className="flex w-full flex-col items-center justify-center gap-y-6 ">
                  <header className="flex w-full items-center gap-x-8">
                     <h4 className="w-20 shrink-0 whitespace-nowrap font-medium md:w-32">หัวข้อ : </h4>
                     <div className="relative w-full justify-center">
                        <InputText
                           form="createReport"
                           className="h-10"
                           name="topic"
                           placeholder="เช่น น้ำไม่ไหล, ห้องน้ำสกปรก"
                        />
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
                        <CreateReportSelectLocation methods={methods} />
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
      </div>
   );
}

export default CreateReportForm;
