import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
// hooks
import { useFormContext } from 'react-hook-form';
import usePreventFirstEffect from '@/hooks/usePreventFirstEffect';
// components
import Icon from '@/components/Icon';
// sections
import CreateReportTagInputDropdown from './CreateReportTagInputDropdown';
import CreateReportTag from './CreateReportTag';

CreateReportTagInput.propTypes = {
   methods: PropTypes.object,
};

function CreateReportTagInput({ methods }) {
   const [currentTags, setCurrentTags] = useState([]);
   const [input, setInput] = useState('');
   const dropdownRef = useRef(null);
   const onRemoveTagClick = (targetId) => {
      setCurrentTags((old) => old.filter((e) => e._id !== targetId));
   };

   const onInputSubmit = (event) => {
      event.preventDefault();
      setCurrentTags((oldTags) =>
         currentTags.find((tag) => tag.name === input)?._id
            ? [...oldTags]
            : [
                 ...oldTags,
                 {
                    name: input,
                    _id: uuid(),
                 },
              ],
      );
      setInput('');
   };

   // custom tags error set value to main form state
   const { getFieldState } = useFormContext();
   const { error } = getFieldState('tags', methods.formState);
   usePreventFirstEffect(() => {
      methods.setValue('tags', currentTags);
      methods.trigger('tags');
   }, [currentTags, methods]);

   return (
      <form
         onSubmit={onInputSubmit}
         className=" relative flex h-10 w-full items-center gap-x-2  rounded-lg border border-text-lighter p-2.5 py-0 text-sm outline-none focus:border-blue-500  focus:ring-blue-500"
      >
         {currentTags.map((tag) => (
            <CreateReportTag tag={tag.name} key={tag._id} onClick={() => onRemoveTagClick(tag._id)} />
         ))}
         <div className="relative h-full w-full">
            <motion.input
               layout="position"
               onFocus={() => dropdownRef.current?.open()}
               className="h-full w-full border-none outline-none focus:placeholder:text-transparent placeholder:text-text-lighter"
               onChange={(e) => setInput(e.target.value)}
               type="text"
               value={input}
               placeholder="เพิ่มแท็ก +"
            />
            <CreateReportTagInputDropdown currentTags={currentTags} setCurrentTags={setCurrentTags} ref={dropdownRef} />
         </div>
         {error && <span className="flex-end  absolute top-[110%] right-0 text-xs text-error">{error.message}</span>}
         {error && (
            <Icon
               className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2  text-error"
               icon="material-symbols:fmd-bad-rounded"
            />
         )}
      </form>
   );
}

export default CreateReportTagInput;
