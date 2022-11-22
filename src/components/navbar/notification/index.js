import PropTypes from 'prop-types';
import { Fragment } from 'react';
// headlessui
import { Popover, Transition } from '@headlessui/react';
// icons
import Icon from '@/components/Icon';
// components
import NotificationPanel from './NotificationPanel';
// hooks
import useNotifications from '@/hooks/useNotifications';
import { NotificationContextProvider } from '@/contexts/NotificationContext';

Notification.propTypes = {
   isSidebar: PropTypes.bool,
   setIsSidebar: PropTypes.func,
};

function Notification() {
   return (
      <NotificationContextProvider>
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
                     <Popover.Panel className=" fixed top-16 right-0 z-10 mt-3 w-screen max-w-sm transform px-4  sm:px-0 md:absolute md:top-10 ">
                        <NotificationPanel />
                     </Popover.Panel>
                  </Transition>
               </>
            )}
         </Popover>
      </NotificationContextProvider>
   );
}

function NotificationNumberIndicator() {
   const { isUnRead } = useNotifications();

   return isUnRead ? (
      <div className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-paper p-[3px]">
         <div className="h-full w-full rounded-full bg-red-500" />
      </div>
   ) : null;
}

export default Notification;
