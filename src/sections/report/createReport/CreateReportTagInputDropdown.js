import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { useMemo, useCallback, useState, forwardRef, useImperativeHandle, useEffect, useRef } from 'react';
// mock
import { fakeTagsResponse } from '@/_mock/reports';

const CreateReportTagInputDropdown = forwardRef(({ input, currentTags, setCurrentTags }, ref) => {
   const filteredResponse = useMemo(
      () =>
         fakeTagsResponse.filter(
            (e) =>
               !currentTags.reduce((acc, cur) => `${acc}${cur.name}`, '').includes(e.name) && e.name.includes(input),
         ),
      [currentTags, input],
   );
   const [isOpen, setIsOpen] = useState();

   useImperativeHandle(ref, () => ({ close, open }));

   const close = useCallback(() => {
      setIsOpen(false);
   }, []);

   const open = useCallback(() => {
      setIsOpen(true);
   }, []);

   const onButtonClick = (tag) => {
      setCurrentTags((oldTags) => [...oldTags, fakeTagsResponse.find((e) => e._id === tag._id)]);
   };

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
         {filteredResponse.map((tag) => (
            <button
               type="button"
               key={tag._id}
               onClick={() => onButtonClick(tag)}
               className="mr-2 w-full whitespace-nowrap px-3 py-1 text-start font-normal hover:bg-gray-100 focus:bg-gray-100"
            >
               {tag.name}
            </button>
         ))}
      </motion.section>
   ) : null;
});

CreateReportTagInputDropdown.propTypes = {
   currentTags: PropTypes.array,
   setCurrentTags: PropTypes.func,
   input: PropTypes.string,
};

export default CreateReportTagInputDropdown;
