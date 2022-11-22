import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
// components
import Icon from '@/components/Icon';
// utils
import { classname } from '@/utils/getClassName';

const InputText = ({ name, label, type = 'text', ...other }) => {
   const { control } = useFormContext();
   return (
      <Controller
         name={name}
         control={control}
         render={({ field, fieldState: { error } }) => (
            <div className={classname('relative flex w-full flex-col', other.className ?? '')}>
               {label && typeof label == 'function' ? (
                  label()
               ) : (
                  <div className="mb-1 cursor-default text-sm">{label}</div>
               )}
               <div className="relative h-full w-full ">
                  <input
                     type={type}
                     {...other}
                     {...field}
                     className="h-full w-full text-sm md:text-base placeholder:text-text-lighter disabled:text-text-lighter "
                  />
                  {error && (
                     <span className="flex-end  absolute top-[110%] right-0 text-xs text-error">{error.message}</span>
                  )}
                  {error && (
                     <Icon
                        className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2  text-error"
                        icon="clarity:error-line"
                     />
                  )}
               </div>
            </div>
         )}
      />
   );
};

InputText.propTypes = {
   name: PropTypes.string,
   label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
   type: PropTypes.string,
};

export default InputText;
