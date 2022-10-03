import PropTypes from 'prop-types';
import { Fragment } from 'react';
// headlessui
import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
// context
import { useTheme } from '@/contexts/ThemeMode';

const Sidebar = ({ isSidebar, setIsSidebar }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Transition appear show={isSidebar} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsSidebar(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                            <Dialog.Panel className="w-full max-w-sm h-screen transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500 text-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis quibusdam
                                        nulla assumenda repudiandae sunt blanditiis soluta harum exercitationem
                                        obcaecati!
                                    </p>
                                </div>
                                <div className="flex items-center mt-16">
                                    <div className="bg-green-300/20 dark:bg-red-300/20 w-full  text-center py-3 rounded-md flex items-center gap-x-3 justify-center">
                                        <Icon icon="ic:twotone-lightbulb" className="w-5 h-5" />
                                        <h3 className="">Drafted Sidebar</h3>
                                        <Icon icon="ic:twotone-lightbulb" className="w-5 h-5" />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

Sidebar.propTypes = {
    isSidebar: PropTypes.bool,
    setIsSidebar: PropTypes.func,
};

export default Sidebar;
