import { useRef } from 'react';
import PropTypes from 'prop-types';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
// hooks
import useUser from '@/hooks/useUser';
// components
import Icon from '@/components/Icon';
import Loader from '@/svg/Loader';

ReportCommentInput.propTypes = {
   report: PropTypes.object,
   createComment: () => {},
   isLoading: PropTypes.bool,
};

function ReportCommentInput({ createComment, isLoading, report }) {
   /* ---------------------------------- form ---------------------------------- */
   const defaultValues = {
      commentInput: '',
   };
   const schema = yup.object().shape({
      commentInput: yup.string(),
   });
   const methods = useForm({
      defaultValues,
      resolver: yupResolver(schema),
   });
   const { control, reset } = methods;

   /* -------------------------------- on submit ------------------------------- */
   const onCommentSubmit = async (value) => {
      if (value.commentInput.length === 0) return;
      await createComment({
         variables: {
            createCommentReportData: {
               reportId: report?._id,
               body: value.commentInput,
            },
         },
      });
      reset();
   };

   const { isAuthenticated } = useUser();

   return (
      <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onCommentSubmit)}>
            <Controller
               name={'commentInput'}
               control={control}
               render={({ field, fieldState: { error } }) => (
                  <div className="relative flex h-10 w-full">
                     <input
                        disabled={!isAuthenticated || isLoading}
                        placeholder={isAuthenticated ? 'แสดงความคิดเห็น' : 'กรุณาล็อคอินก่อน'}
                        type="text"
                        {...field}
                        className="h-full w-full !px-6 text-sm placeholder:text-text-lighter md:text-base"
                     />
                     {isLoading ? (
                        <Loader style={{ translate: "0 -50%" }} backgroundColor="white" className="absolute right-2 top-1/2 h-5 w-5" />
                     ) : (
                        <Icon
                           className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-text-lighter"
                           icon="akar-icons:send"
                        />
                     )}
                  </div>
               )}
            />
         </form>
      </FormProvider>
   );
}

export default ReportCommentInput;
