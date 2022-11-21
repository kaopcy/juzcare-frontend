import PropTypes from 'prop-types';

// components
import Icon from '@/components/Icon';
import Image from '@/components/Image';
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
      <div
         className={classname(
            'flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-full',
            rest.className ?? '',
         )}
      >
         {isAuthenticated ? (
            <div className={classname('relative h-full w-full rounded-full bg-transparent')}>
               <Image src={user.avatar.avatarUrl} alt={user.firstName} className="m-auto h-full w-full  rounded-[50%]" />
            </div>
         ) : (
            <Icon icon="ic:baseline-account-circle" className="h-full w-full" />
         )}
      </div>
   );
}

export default UserProfileIcon;
