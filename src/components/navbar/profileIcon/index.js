import { Fragment, useEffect } from 'react';
import Image from 'next/image';
// hooks
import useUser from '@/hooks/useUser';
// components
import { Popover, Transition } from '@headlessui/react';
import Icon from '@/components/Icon';
import ProfileIconDropdown from './ProfileIconDropdown';

function ProfileIcon() {
   const user = useUser();

   return (
      <Popover className="relative flex items-center">
         {({ open }) => (
            <>
               <Popover.Button>
                  <div className="relative aspect-square h-12 rounded-full  ">
                     {user ? (
                        <>
                           <div className="relative aspect-square h-full rounded-full border border-primary-light  p-0.5">
                              <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-primary-light">
                                 <Image src={user.avatar.avatarUrl} alt="avatar" layout="fill" objectFit="cover" />
                              </div>
                           </div>
                        </>
                     ) : (
                        <Icon icon="ic:baseline-account-circle" className="h-full w-full" />
                     )}
                  </div>
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
