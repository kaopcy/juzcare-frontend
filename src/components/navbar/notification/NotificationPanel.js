// headlessui
import { Popover } from '@headlessui/react';
// icons
import { Icon } from '@iconify/react';
// components
import NotificationList from './NotificationList';

function NotificationPanel() {
   const test = [
      {
         id: 1,
         label: 'มีคนมาไลค์กระทู้คุณ',
         href: '/',
         type: 'like',
      },
      {
         id: 2,
         label: 'มีคนคอมเมนท์กระทู้คุณ',
         href: '/',
         type: 'comment',
      },
      {
         id: 3,
         label: 'กระทู้คุณอยู่ในลำดับที่ 1 ในการโหวต',
         href: '/',
         type: 'trend',
      },
      {
         id: 4,
         label: 'มีคนมาไลค์กระทู้คุณ',
         href: '/',
         type: 'like',
      },
   ];
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
            {test.map((e) => (
               
                  <NotificationList key={e.id}  notification={e} />
               
            ))}
         </aside>
      </section>
   );
}

export default NotificationPanel;
