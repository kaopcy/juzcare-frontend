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
            <div  className={classname('relative flex w-full flex-col', other.className ?? '')}>
               {label && <div className="mb-1 text-sm">{label}</div>}
               <input type={type} {...other} {...field} className="h-full w-full" />
               {error && (
                  <span className="flex-end  absolute top-[110%] right-0 text-xs text-error">{error.message}</span>
               )}
               {error && (
                  <Icon
                     className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2  text-error"
                     icon="material-symbols:fmd-bad-rounded"
                  />
               )}
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
