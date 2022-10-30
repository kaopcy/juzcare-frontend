import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Link from '@/components/Link';
// headlessui
import { Dialog, Transition } from '@headlessui/react';
import { Icon, InlineIcon } from '@iconify/react';
// context
import { useTheme } from '@/contexts/ThemeMode';
// path
import { PATH } from '@/routes/index';
import { navItems } from './navbar.config';

const Sidebar = ({ isSidebar, setIsSidebar }) => {
    const { theme, toggleTheme } = useTheme();
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
                    <Dialog.Backdrop className="fixed inset-0 bg-black bg-opacity-60 z-sidebar-overlay" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-start text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-x-0 scale-100"
                            leaveTo="opacity-0 scale-95 -translate-x-full"
                        >
                            <Dialog.Panel className="w-full flex flex-col  max-w-xs md:max-w-sm h-screen transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="div" className="flex items-center  w-full">
                                    <h1 className="">JuzCare</h1>

                                    <button
                                        type="button"
                                        className="p-2 ml-auto mr-2 bg-gray-100 rounded-md hover:bg-gray-200"
                                    >
                                        <Icon
                                            onClick={() => toggleTheme()}
                                            icon={theme === 'light' ? 'ic:twotone-dark-mode' : 'ic:twotone-light-mode'}
                                            className="w-5 h-5 "
                                        />
                                    </button>
                                    <button type="button" className="p-2 bg-gray-100 rounded-md hover:bg-gray-200">
                                        <Icon
                                            onClick={() => setIsSidebar(false)}
                                            icon="ic:twotone-close"
                                            className="w-5 h-5 "
                                        />
                                    </button>
                                </Dialog.Title>

                                <div className="w-full h-[1px] bg-gray-200 my-6" />

                                <div className="flex items-center mb-4">
                                    <div className="bg-green-300/20 dark:bg-red-300/20 w-full  text-center py-3 rounded-md flex items-center gap-x-3 justify-center">
                                        <Icon icon="ic:twotone-lightbulb" className="w-5 h-5" />
                                        <h3 className="">Drafted Sidebar</h3>
                                        <Icon icon="ic:twotone-lightbulb" className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* render nav link */}
                                <section className="flex flex-col gap-y-3">
                                    {navItems.map((navItem) => (
                                        <Link key={navItem.id} href={navItem.href}>
                                            {({ isMatch }) => (
                                                <div onClick={()=> setIsSidebar(false)} className="cursor-pointer w-full px-4 py-3 rounded-md flex items-center justify-between">
                                                    <h3 className={`${isMatch && 'underline'}`} >{navItem.name}</h3>
                                                    <Icon className="w-6 h-6" icon={navItem.icon} />
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </section>

                                <AuthLink />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const AuthLink = () => (
    <section className="flex w-full items-center gap-x-3 mt-auto">
        <Link href={PATH.auth.login}>
            <button className="w-full flex items-center justify-center h-12 gap-x-2 rounded-md bg-text text-paper">
                <p className="text-paper">เข้าสู่ระบบ</p>
                <InlineIcon className="text-paper" icon="ic:twotone-vpn-key" color="#fff" />
            </button>
        </Link>
        <Link href={PATH.auth.register}>
            <button className="w-full flex items-center justify-center h-12 gap-x-2 rounded-md bg-blue-300/20 hover:bg-blue-300/30">
                <p>สมัครใช้งาน</p>
                <InlineIcon className="text-red-500" icon="ic:twotone-person-add-alt" />
            </button>
        </Link>
    </section>
);

Sidebar.propTypes = {
    isSidebar: PropTypes.bool,
    setIsSidebar: PropTypes.func,
};

export default Sidebar;
