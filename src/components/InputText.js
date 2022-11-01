import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import IconError from '@/sections/login/IconError';

const InputText = ({ name, label , type='text' , ...other}) => {
    const { control  } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div  {...other} className="relative flex flex-col w-full">
                    {label && <div className="mb-1 text-sm">{label}</div>}
                    <input type={type} {...field} className="" />
                    {error && <div className="absolute right-0 mt-1 text-sm top-16 flex-end text-error">{error.message}</div>}
                    {error && <IconError className="absolute right-0 mr-1 top-8 "/>}
                </div>
            )}
        />
    );
};

InputText.propTypes = {
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default InputText;
