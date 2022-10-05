import PropTypes from 'prop-types';
import { Fragment, useRef, useState } from 'react';
// headlessui
import { Popover, Transition, Tab } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Notification = () => {
    const [isNotification, setIsNotification] = useState(false);
    return (
        <>
            <Popover className="relative w-6 h-6">
                {({ open }) => (
                    <>
                        <Popover.Button>
                            <Icon className="w-6 h-6" icon="ic:twotone-notifications-active" />
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
                            <Popover.Panel className=" absolute right-0 z-10 mt-3 w-screen max-w-sm  transform px-4 sm:px-0 ">
                                <Panel />
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    );
};

const Panel = () => {
    const prevId = useRef(0)
    const [categories] = useState({
        Recent: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
            {
                id: 3,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
            {
                id: 4,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
            {
                id: 5,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
            {
                id: 6,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    });
    return (
        <div className="overflow-x-hidden p-3 overflow-y-scroll max-h-[400px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 ${
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                }`
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                        >
                            <motion.ul
                                initial={{
                                    opacity: 0,
                                    translateX: '100%',
                                }}
                                animate={{ opacity: 1, translateX: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                            >
                                {posts.map((post) => (
                                    <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100">
                                        <h3 className="text-sm font-medium leading-5">{post.title}</h3>

                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href="#"
                                            className={
                                                ('absolute inset-0 rounded-md',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')
                                            }
                                        />
                                    </li>
                                ))}
                            </motion.ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

Notification.propTypes = {
    isSidebar: PropTypes.bool,
    setIsSidebar: PropTypes.func,
};

export default Notification;
