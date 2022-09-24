import { loginCase, registerCase , initialCase } from '@/configs/errorMessages/userError';

const customError = (type, initError) => {
    if (!initError?.message) return error;
    let error = initError.message;
    if (Array.isArray(error) && error.length > 0) {
        console.log(error);
        error = error[0];
    }

    switch (type) {
        case 'LOGIN': {
            return loginCase(error);
        }
        case 'REGISTER': {
            return registerCase(error);
        }
        case 'INITIAL': {
            return initialCase(error);
        }
        default: {
            return error;
        }
    }
};

export default customError;
