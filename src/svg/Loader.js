import PropTypes from 'prop-types';
import { classname } from '@/utils/getClassName';

Loader.propTypes = {
   className: PropTypes.string,
   backgroundColor: PropTypes.string,
   indicatorColor: PropTypes.string,
};

function Loader({ className, backgroundColor, indicatorColor, ...props }) {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="none"
         className={classname('animate-spin', className ?? '')}
         {...props}
      >
         <path
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"
            fill={backgroundColor ?? '#DFE4EF'}
         />
         <path
            d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.76121C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L20 12C20 10.9494 19.7931 9.90914 19.391 8.93853C18.989 7.96793 18.3997 7.08602 17.6569 6.34315C16.914 5.60028 16.0321 5.011 15.0615 4.60896C14.0909 4.20693 13.0506 4 12 4L12 2Z"
            fill={indicatorColor ?? '#F7931E'}
         />
      </svg>
   );
}

export default Loader;
