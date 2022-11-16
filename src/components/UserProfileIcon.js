import PropTypes from 'prop-types';

import Image from 'next/image';
// components
import Icon from '@/components/Icon';
// hooks
import useUser from '@/hooks/useUser';
// utils
import { classname } from '@/utils/getClassName';

UserProfileIcon.propTypes = {
   isBorder: PropTypes.bool,
};

function UserProfileIcon({ isBorder = false, ...rest }) {
   const { user, isAuthenticated } = useUser();

   return (
      <div className={classname('aspect-square shrink-0 overflow-hidden rounded-full', rest.className ?? '')}>
         {isAuthenticated ? (
            <div
               className={classname(
                  'relative h-full w-full rounded-full bg-transparent',
                  isBorder && 'border-[2.5px] border-primary',
               )}
            >
               <Image
                  src={user.avatar.avatarUrl}
                  alt={user.firstName}
                  layout="fill"
                  objectFit="cover"
                  className="m-auto h-[90%] w-[90%]"
               />
            </div>
         ) : (
            <Icon icon="ic:baseline-account-circle" className="h-full w-full" />
         )}
      </div>
   );
}

export default UserProfileIcon;
