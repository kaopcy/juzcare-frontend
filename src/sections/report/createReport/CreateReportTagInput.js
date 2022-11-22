import PropTypes from 'prop-types';
import { useCallback, useRef, useState } from 'react';
// hooks
import usePreventFirstEffect from '@/hooks/usePreventFirstEffect';
import { useFormContext } from 'react-hook-form';
// components
import Icon from '@/components/Icon';
// sections
import CreateReportTag from './CreateReportTag';
import CreateReportTagInputDropdown from './CreateReportTagInputDropdown';

CreateReportTagInput.propTypes = {
   methods: PropTypes.object,
};

function CreateReportTagInput({ methods }) {
   const [currentTags, setCurrentTags] = useState([]);
   const [input, setInput] = useState('');
   const dropdownRef = useRef(null);
   const onRemoveTagClick = (targetName) => {
      setCurrentTags((old) => old.filter((e) => e.name !== targetName));
   };
   
   const onInputSubmit = (event) => {
      event.preventDefault();
      if (input.length === 0) return;
      setCurrentTags((oldTags) =>
         currentTags.find((tag) => tag.name === input)?.name
            ? [...oldTags]
            : [
                 ...oldTags,
                 {
                    name: input,
                    _id: input,
                 },
              ],
      );
      setInput('');
   };

   const onInputChange = (e) => {
      setInput(e.target.value);
   };

   const onInputKeyDown = useCallback(
      (e) => {
         if (e.keyCode === 8 && input.length === 0 && currentTags.length > 0) {
            e.preventDefault();
            setCurrentTags((old) => old.slice(0, -1));
         }
      },
      [input, currentTags],
   );

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
            <CreateReportTag tag={tag.name} key={tag._id} onClick={() => onRemoveTagClick(tag.name)} />
         ))}
         <div className="relative h-full w-full">
            <input
               onKeyDown={onInputKeyDown}
               onFocus={() => dropdownRef.current?.open()}
               onClick={() => dropdownRef.current?.open()}
               className="h-full w-full border-none !p-0 outline-none placeholder:text-text-lighter focus:placeholder:text-transparent"
               onChange={onInputChange}
               type="text"
               value={input}
               placeholder="เพิ่มแท็ก +"
            />
            <CreateReportTagInputDropdown
               input={input}
               currentTags={currentTags}
               setCurrentTags={setCurrentTags}
               ref={dropdownRef}
            />
         </div>
         {error && <span className="flex-end  absolute top-[110%] right-0 text-xs text-error">{error.message}</span>}
         {error && (
            <Icon className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2  text-error" icon="clarity:error-line" />
         )}
      </form>
   );
}

export default CreateReportTagInput;
