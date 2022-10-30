import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

const InputText = ({ name, label , ...other }) => {
    const { control  } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div  {...other} className="flex flex-col relative w-full">
                    {label && <div className="text-sm mb-1">{label}</div>}
                    <input type={'text'} {...field} className="" />
                    {error && <div className="ml-auto text-error text-sm">{error.message}</div>}
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
