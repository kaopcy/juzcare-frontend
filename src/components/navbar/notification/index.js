import PropTypes from 'prop-types';
import { Fragment } from 'react';
// headlessui
import { Popover, Transition } from '@headlessui/react';
// icons
import Icon from '@/components/Icon'
// components
import NotificationPanel from './NotificationPanel';

Notification.propTypes = {
   isSidebar: PropTypes.bool,
   setIsSidebar: PropTypes.func,
};

function Notification() {
   return (
      <>
         <Popover className="relative flex items-center">
            {({ open }) => (
               <>
                  <Popover.Button>
                     <NotificationNumberIndicator />
                     <Icon className="h-8 w-8  text-text" icon="ci:notification" />
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
                     <Popover.Panel className=" z-10 fixed md:absolute top-16 md:top-10 right-0 mt-3 w-screen max-w-sm  transform px-4 sm:px-0 ">
                        <NotificationPanel />
                     </Popover.Panel>
                  </Transition>
               </>
            )}
         </Popover>
      </>
   );
}

function NotificationNumberIndicator() {
   return (
      <div className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-paper p-[3px]">
         <div className="h-full w-full rounded-full bg-red-500" />
      </div>
   );
}

export default Notification;
