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

ReportProgressForm.propTypes = {
   isAdd: PropTypes.bool,
   setIsAdd: () => {},
};

function ReportProgressForm({ isAdd, setIsAdd }) {
   const { report } = useReport();
   const defaultValues = {
      media: [],
      body: '',
   };

   const resolver = yup.object().shape({
      media: yup.array().min(1, 'กรุณาเลือกอย่างน้อย 1 ไฟล์'),
      body: yup.string().required('กรุณาใส่เนื้อหา'),
   });

   const methods = useForm({
      resolver: yupResolver(resolver),
      defaultValues,
   });

   const dispatch = useDispatch();
   const { response, error, isLoading, upload } = useUploadFiles();
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
         const res = await createProgressReport(shapedInput);
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
                     className="z-10 flex w-full max-w-[500px] flex-col gap-y-4 rounded-md bg-paper px-8 py-10 shadow-xl "
                     onSubmit={methods.handleSubmit(onSubmit)}
                  >
                     <div className="flex justify-between">
                        <h3 className="self-center text-primary underline">อัปเดตความคืบหน้า</h3>
                        <Icon />
                     </div>
                     <TextField label="รายละเอียด" name="body" />
                     <CreateReportAddFile methods={methods} />
                     <button className="ml-auto mt-4 rounded-lg bg-primary px-8 py-2 text-paper shadow-md">
                        ยืนยัน
                     </button>
                  </motion.form>
               </FormProvider>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default ReportProgressForm;
