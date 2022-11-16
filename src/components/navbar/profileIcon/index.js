import { Fragment, useEffect } from 'react';
import Image from 'next/image';
// hooks
import useUser from '@/hooks/useUser';
// components
import { Popover, Transition } from '@headlessui/react';
import Icon from '@/components/Icon';
import UserProfileIcon from '@/components/UserProfileIcon';
// sections
import ProfileIconDropdown from './ProfileIconDropdown';

function ProfileIcon() {
   const { user, isAuthenticated } = useUser();

   return (
      <Popover className="relative flex items-center">
         {({ open }) => (
            <>
               <Popover.Button>
                  <UserProfileIcon isBorder className="h-12" />
               </Popover.Button>
               <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
               >
                  <Popover.Panel className=" fixed top-16 right-0 z-10 mt-3  transform px-4  sm:px-0 md:absolute md:top-10 ">
                     <ProfileIconDropdown />
                  </Popover.Panel>
               </Transition>
            </>
         )}
      </Popover>
   );
}

export default ProfileIcon;
