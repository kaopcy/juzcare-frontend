import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Image from '../Image';

UserIconWithTooltip.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   user: PropTypes.object,
   index: PropTypes.number,
};

function UserIconWithTooltip({ src, alt, user, index }) {
   return (
      <>
         <Image
            lazy={false}
            data-for={`${index}` ?? `tooltip-${user._id}`}
            data-tip={`${index}` ?? `tooltip-${user._id}`}
            alt={alt}
            src={src}
            objectFit="cover"
            layout="fill"
         />
         <ReactTooltip
            id={`${index}` ?? `tooltip-${user._id}`}
            className="!rounded-lg !p-4 !shadow-md"
            place="top"
            type="light"
            effect="float"
            getContent={() => (
               <div className="flex items-start">
                  {/* <div className="relative h-20 w-20 overflow-hidden rounded-full mr-2">
                     <Image lazy={false} alt={alt} src={src} objectFit="cover" layout="fill" />
                  </div> */}
                  <div className="mr-3 text-base font-bold text-text">{user.firstName}</div>
                  <div className="text-base font-bold text-text">{user.lastName}</div>
               </div>
            )}
         />
      </>
   );
}

export default UserIconWithTooltip;
