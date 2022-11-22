import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback, useState, useRef } from 'react';
// hooks
import { useFormContext } from 'react-hook-form';
// components
import Icon from '@/components/Icon';
import usePreventFirstEffect from '@/hooks/usePreventFirstEffect';
// utils
import humanFileSize from '@/utils/humanFileSize';

CreateReportAddFile.propTypes = {
   methods: PropTypes.object,
};

function CreateReportAddFile({ methods }) {
   const [files, setFiles] = useState([]);
   const fileInputRef = useRef();
   const onInputFileChange = useCallback(
      (e) => {
         const curFiles = [...e.target.files];
         if (!curFiles) return;
         const filteredFile = curFiles.filter((curFile) => !files.some((file) => file.name === curFile.name));
         setFiles((old) => [...old, ...filteredFile]);
         fileInputRef.current.value = [];
      },
      [files],
   );

   const getUrlObject = useCallback((e) => URL.createObjectURL(e), []);

   const onFileClick = (targetName) => {
      setFiles((old) => old.filter((e) => e.name !== targetName));
   };

   // custom tags error set value to main form state
   const { getFieldState } = useFormContext();
   const { error } = getFieldState('media', methods.formState);
   usePreventFirstEffect(() => {
      methods.setValue('media', files);
      methods.trigger('media');
   }, [files, methods]);

   return (
      <div className="relative flex w-full flex-wrap items-center justify-start gap-x-3 gap-y-3">
         {files?.map((e) => (
            <motion.button
               layout="position"
               type="button"
               onClick={() => onFileClick(e.name)}
               key={e.name}
               className="flex max-w-[140px] items-center whitespace-nowrap rounded-lg border border-primary  px-2 py-2 hover:border-primary-dark"
            >
               <div className="relative mr-2 aspect-square h-7 shrink-0">
                  <Image layout="fill" objectFit="cover" alt={e.name} src={getUrlObject(e)} />
               </div>
               <div className="ellipsis mr-2 flex flex-col">
                  <span className="ellipsis text-start  text-xs font-bold">{e.name}</span>
                  <span className="ellipsis text-start text-xs font-normal text-text-light/70">
                     {humanFileSize(e.size, true)}
                  </span>
               </div>
               <Icon className="h-3 w-3 shrink-0 text-error" icon="ic:twotone-close" />
            </motion.button>
         ))}
         <motion.label
            layout="position"
            className="cursor-pointer rounded-md border px-6 py-1 hover:border-gray-600"
            htmlFor="create-report-file-upload"
         >
            เพิ่มไฟล์
         </motion.label>
         <input
            accept=".png, .gif, .jpeg, .jpg, .webp"
            multiple
            ref={fileInputRef}
            onChange={onInputFileChange}
            id="create-report-file-upload"
            className="invisible w-0"
            type="file"
         />
         {error && <span className="flex-end  absolute top-[110%] right-0 text-xs text-error">{error.message}</span>}
         {error && (
            <Icon className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2  text-error" icon="clarity:error-line" />
         )}
      </div>
   );
}

export default CreateReportAddFile;
