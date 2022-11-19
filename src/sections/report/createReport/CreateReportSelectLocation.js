import { useState } from 'react';
import PropTypes from 'prop-types';
// hooks
import usePreventFirstEffect from '@/hooks/usePreventFirstEffect';
import { useFormContext } from 'react-hook-form';
// components
import Icon from '@/components/Icon';

CreateReportSelectLocation.propTypes = {
   methods: PropTypes.object,
};

function CreateReportSelectLocation({ methods }) {
   // custom tags error set value to main form state
   const { getFieldState } = useFormContext();
   const { error } = getFieldState('location', methods.formState);

   const [selectedLocation, setSelectedLocation] = useState('');

   usePreventFirstEffect(() => {
      methods.setValue('location', selectedLocation);
      methods.trigger('location');
   }, [selectedLocation, methods]);

   return (
      <div className="relative w-full">
         <select className=" h-10 w-full appearance-none rounded-md border bg-white p-2.5  text-sm text-black shadow-sm outline-none focus:active:border-primary">
            <option location="1">{error?.message ?? 'ตึกโหล'}</option>
            <option location="2">ตึกพระเทพ</option>
            <option location="3">โรงA</option>
            <option location="4">หอสมุด</option>
         </select>
         {error && (
            <span className="flex-end absolute top-[110%] right-0 z-10 text-xs text-error">{error.message}</span>
         )}
         {error && (
            <Icon
               className="absolute right-2 top-1/2 z-20 h-5 w-5 -translate-y-1/2  text-error"
               icon="clarity:error-line"
            />
         )}
      </div>
   );
}

export default CreateReportSelectLocation;
