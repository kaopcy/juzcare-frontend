//form
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
// hooks
import useUploadFiles from '@/hooks/useUploadFiles';
import { createReport } from '@/services/createReport.service';
// components
import InputText from '@/components/hookFormComponents/InputText';
import TextField from '@/components/hookFormComponents/TextField';
// stores
import { stopLoading } from '@/redux/slices/loading';
import { useDispatch } from '@/redux/store';
// sections
import { useRouter } from 'next/router';
import CreateReportAddFile from './CreateReportAddFile';
import CreateReportSelectLocation from './CreateReportSelectLocation';
import CreateReportTagInput from './CreateReportTagInput';

function CreateReportForm() {
   /* ---------------------------------- form ---------------------------------- */
   const defaultValues = {
      title: '',
      detail: '',
      tags: [],
      location: '',
      media: [],
   };

   const resolver = yup.object().shape({
      title: yup.string().required('กรุณากรอกหัวข้อ'),
      detail: yup.string().required('กรุณากรอกรายละเอียด'),
      tags: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 แท็ก'),
      media: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 ไฟล์'),
      location: yup.string().required('กรุณาเลือกสถานที่'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const dispatch = useDispatch();
   const router = useRouter();
   const { isLoading, upload } = useUploadFiles();

   const onSubmit = async (value) => {
      try {
         const imageLinks = await upload(value.media);
         const shapedInput = {
            ...value,
            locationDetail: 'awdawdawdaw',
            tags: value.tags.map((e) => e.name),
            medias: imageLinks.map((link) => ({
               imageUrl: link,
            })),
         };
         await createReport({ ...shapedInput });
         dispatch(stopLoading());
         router.replace('/reports');
      } catch (error) {
         dispatch(stopLoading());
         console.log(error);
      }
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
                           name="title"
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
