import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import CreateReportAddFile from '../createReport/CreateReportAddFile';
import TextField from '@/components/hookFormComponents/TextField';
import useUploadFiles from '@/hooks/useUploadFiles';
import Icon from '@/components/Icon';
import { useDispatch } from 'react-redux';
import { stopLoading } from '@/redux/slices/loading';
import { createProgressReport } from '@/services/report.service';
import useReport from '@/hooks/useReport';
import { ACTION } from '@/contexts/ReportContext';
import useUser from '@/hooks/useUser';
import Link from '@/components/Link';

ReportProgressForm.propTypes = {
   isAdd: PropTypes.bool,
   setIsAdd: () => {},
};

function ReportProgressForm({ isAdd, setIsAdd }) {
   const { isAuthenticated } = useUser();

   const { report, dispatch: reportDispatch } = useReport();
   const defaultValues = {
      media: [],
      body: '',
   };

   function checkIfFilesAreTooBig(files) {
      let valid = true;
      if (files) {
         files.map((file) => {
            const size = file.size / 1024 / 1024;
            if (size > 3) {
               valid = false;
            }
         });
      }
      return valid;
   }

   const resolver = yup.object().shape({
      media: yup
         .array()
         .min(1, 'กรุณาเลือกอย่างน้อย 1 ไฟล์')
         .test('is-correct-file', 'ขนาดไฟล์ต้องไม่เกิน 3mb', checkIfFilesAreTooBig),
      body: yup.string().required('กรุณาใส่เนื้อหา'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const dispatch = useDispatch();
   const { upload } = useUploadFiles();
   const onSubmit = async (value) => {
      try {
         const imageLinks = await upload(value.media);
         const shapedInput = {
            detail: value.body,
            reportId: report._id,
            medias: imageLinks.map((link) => ({
               imageUrl: link,
            })),
         };
         const progresses = await createProgressReport(shapedInput);
         reportDispatch({ type: ACTION.UPDATE_PROGRESS, payload: { progresses } });
         setIsAdd(false);
         dispatch(stopLoading());
         // router.replace('/reports');
      } catch (error) {
         dispatch(stopLoading());
         console.log(error.message);
      }
   };

   return (
      <AnimatePresence>
         {isAdd && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ ease: 'easeInOut', duration: 0.2 }}
               className="fixed inset-0 z-[101]  flex flex-col items-center justify-center "
            >
               <div onClick={() => setIsAdd(false)} className="absolute inset-0 bg-black/60" />
               <FormProvider {...methods}>
                  <motion.form
                     initial={{ y: 40, scale: 0.9 }}
                     animate={{ y: 0, scale: 1 }}
                     exit={{ y: 40, scale: 0.9 }}
                     transition={{ ease: 'easeInOut', duration: 0.2 }}
                     className="relative z-10 flex w-full max-w-[500px] flex-col gap-y-4 rounded-md bg-paper px-8 py-10 shadow-xl "
                     onSubmit={methods.handleSubmit(onSubmit)}
                  >
                     <div className="flex justify-between">
                        <h3 className="self-center text-primary underline">อัปเดตความคืบหน้า</h3>
                        <Icon />
                     </div>
                     <TextField disabled={!isAuthenticated} label="รายละเอียด" name="body" />
                     <CreateReportAddFile methods={methods} />
                     <button
                        disabled={!isAuthenticated}
                        className="ml-auto mt-4 rounded-lg bg-primary px-8 py-2 text-paper shadow-md"
                     >
                        ยืนยัน
                     </button>
                     {!isAuthenticated && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/30 !text-3xl font-bold text-paper">
                           <h1>กรุณาเข้าสู่ระบบ</h1>
                           <Link href="/auth/login">
                              <a className="mt-6 rounded-lg bg-primary px-3 py-2 text-base font-medium shadow-md ">
                                 เข้าสู่ระบบ
                              </a>
                           </Link>
                        </div>
                     )}
                  </motion.form>
               </FormProvider>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default ReportProgressForm;
