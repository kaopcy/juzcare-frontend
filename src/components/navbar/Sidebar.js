import Link from '@/components/Link';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
// headlessui
import { Dialog, Transition } from '@headlessui/react';
// icon
import Icon from '@/components/Icon';
import Logo from '../../svg/Logo';
import SidebarUserProfile from './SidebarUserProfile';
// path
import { PATH } from '@/routes/index';
// config
import navConfig from '@/configs/nav.config';
// hooks
import useUser from '@/hooks/useUser';

const Sidebar = ({ isSidebar, setIsSidebar }) => {
   const { user, isAuthenticated } = useUser();

   return (
      <Transition appear show={isSidebar} as={Fragment}>
         <Dialog as="div" className="relative z-sidebar" onClose={() => setIsSidebar(false)}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <Dialog.Backdrop className="fixed inset-0 z-sidebar-overlay bg-black bg-opacity-60" />
            </Transition.Child>
            <aside className="fixed inset-0 overflow-y-auto text-text">
               <div className="flex h-full items-center justify-start text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 -translate-x-full"
                     enterTo="opacity-100 translate-x-0 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 translate-x-0 scale-100"
                     leaveTo="opacity-0  -translate-x-full"
                  >
                     <Dialog.Panel className="flex h-full w-full max-w-xs  shrink-0 transform flex-col overflow-hidden bg-white  p-6 text-left align-middle shadow-xl transition-all md:max-w-sm">
                        <Dialog.Title as="div" className="flex w-full  items-center justify-between">
                           <div className="w-[100px]">
                              <Logo />
                           </div>
                           <button type="button" className="rounded-md p-1 hover:bg-red-500/5">
                              <Icon
                                 onClick={() => setIsSidebar(false)}
                                 icon="ic:twotone-close"
                                 className="h-7 w-7 text-primary-dark"
                              />
                           </button>
                        </Dialog.Title>

                        {/* divider */}
                        <div className="my-6 h-[1px] w-full bg-gray-200" />

                        {/* navlink */}
                        <section className="flex flex-col gap-y-3">
                           {navConfig.map((navItem) => (
                              <Link key={navItem.id} href={navItem.href}>
                                 {({ isMatch }) => (
                                    <div
                                       onClick={() => setIsSidebar(false)}
                                       className={`flex w-full cursor-pointer items-end  rounded-md px-4 py-3 ${
                                          isMatch && 'bg-primary-lighter/30'
                                       }`}
                                    >
                                       <Icon className="mr-3 h-7 w-7" icon={navItem.icon} />
                                       <h4 className="font-medium">{navItem.title}</h4>
                                    </div>
                                 )}
                              </Link>
                           ))}
                        </section>
                        {isAuthenticated ? <SidebarUserProfile /> : <AuthLink />}
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </aside>
         </Dialog>
      </Transition>
   );
};

const AuthLink = () => (
   <section className="mt-auto flex w-full items-center gap-x-3">
      <Link href={PATH.auth.login}>
         <button className="flex w-full items-center justify-center gap-x-2 rounded-md border-2 border-paper bg-primary py-2 text-paper">
            <h4 className="text-paper">เข้าสู่ระบบ</h4>
         </button>
      </Link>
      <Link href={PATH.auth.register}>
         <button className="flex w-full items-center justify-center gap-x-2 rounded-md border-2 border-primary py-2 text-primary   hover:bg-blue-300/30">
            <h4>ลงทะเบียน</h4>
         </button>
      </Link>
   </section>
);

Sidebar.propTypes = {
   isSidebar: PropTypes.bool,
   setIsSidebar: PropTypes.func,
};

export default Sidebar;
