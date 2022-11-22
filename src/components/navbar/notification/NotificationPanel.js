// headlessui
import { Popover } from '@headlessui/react';
// icons
import { Icon } from '@iconify/react';
// components
import NotificationList from './NotificationList';
// hooks
import useNotifications from '@/hooks/useNotifications';
import useUser from '@/hooks/useUser';

function NotificationPanel() {
   const { notifications } = useNotifications();
   const { isAuthenticated } = useUser();

   return (
      <section className=" max-h-[400px] overflow-x-hidden  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
         <header className="flex w-full items-center justify-between bg-text p-5">
            <h3 className="text-paper">แจ้งเตือน</h3>
            <Popover.Button
               as={Icon}
               icon="ic:twotone-close"
               className="h-7 w-7 cursor-pointer rounded-md text-primary-dark hover:bg-primary-dark/20"
            />
         </header>
         <aside className="overflow-y-auto overflow-x-hidden py-3 ">
            {isAuthenticated ? (
               notifications.length === 0 ? (
                  <p className="py-3 text-center">ไปเริ่มสร้างกระทู้กัน !!</p>
               ) : (
                  notifications?.map((e) => <NotificationList key={e._id} notification={e} />)
               )
            ) : (
               <p className="py-3 text-center">กรุณาเข้าสู่ระบบก่อน</p>
            )}
         </aside>
      </section>
   );
}

export default NotificationPanel;
