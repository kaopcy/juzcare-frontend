import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { GetPopularTagGQL } from '@/graphql/report.gql';
import { useQuery } from '@apollo/client';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

const CreateReportTagInputDropdown = forwardRef(({ input, currentTags, setCurrentTags }, ref) => {
   const { data, loading, refetch } = useQuery(GetPopularTagGQL, {
      variables: {
         tagsQuery: input,
      },
   });

   useEffect(() => {
      refetch();
   }, [input, refetch]);

   const filteredByInputTags = useMemo(
      () =>
         data?.getPopularTags?.filter(
            (e) =>
               !currentTags.reduce((acc, cur) => `${acc}${cur.name}`, '').includes(e.name) && e.name.includes(input),
         ),
      [currentTags, input, data],
   );
   const [isOpen, setIsOpen] = useState();

   const onButtonClick = (tag) => {
      setCurrentTags((oldTags) => [...oldTags, data?.getPopularTags.find((e) => e._id === tag._id)]);
   };

   /* --------------------------- handle close - open -------------------------- */
   useImperativeHandle(ref, () => ({ close, open }));
   const close = useCallback(() => {
      setIsOpen(false);
   }, []);

   const open = useCallback(() => {
      setIsOpen(true);
   }, []);

   /* --------------------- handle onclick outside dropdown -------------------- */
   const dropDownElRef = useRef(null);
   useEffect(() => {
      const { current: dropdownEl } = dropDownElRef;
      const event = (e) => {
         if (dropdownEl && !dropdownEl.contains(e.target)) {
            close();
         }
      };
      document.addEventListener('mousedown', event);

      return () => {
         document.removeEventListener('mousedown', event);
      };
   }, [close, isOpen]);

   return isOpen ? (
      <motion.section
         layout="position"
         ref={dropDownElRef}
         className="absolute z-40 flex flex-col items-start  rounded-lg border bg-white py-2 shadow-md"
      >
         {loading ? (
            <div className="mr-2 w-full whitespace-nowrap px-3 py-1 text-start font-normal hover:bg-gray-100 focus:bg-gray-100">
               กำลังโหลด
            </div>
         ) : (
            <>
               {filteredByInputTags?.map((tag) => (
                  <button
                     type="button"
                     key={tag._id}
                     onClick={() => onButtonClick(tag)}
                     className="mr-2 w-full whitespace-nowrap px-3 py-1 text-start font-normal hover:bg-gray-100 focus:bg-gray-100"
                  >
                     #{tag.name}
                  </button>
               ))}
               {filteredByInputTags.length === 0 && (
                  <div className="mr-2 w-full whitespace-nowrap px-3 py-1 text-start font-normal hover:bg-gray-100 focus:bg-gray-100">
                     เพิ่มแท็ก "{input}"
                  </div>
               )}
            </>
         )}
      </motion.section>
   ) : null;
});

CreateReportTagInputDropdown.propTypes = {
   currentTags: PropTypes.array,
   setCurrentTags: PropTypes.func,
   input: PropTypes.string,
};

export default CreateReportTagInputDropdown;
