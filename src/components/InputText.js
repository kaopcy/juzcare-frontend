import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

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
                    {error && <div className="ml-auto text-sm text-error">{error.message}</div>}
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
