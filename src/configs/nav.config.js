import { PATH } from '@/routes/index';

const navConfig = [
   {
      id: 1,
      href: PATH.home,
      title: 'หน้าหลัก',
      value: 'home',
      icon: 'ic:round-home',
   },
   {
      id: 2,
      href: PATH.thread,
      title: 'กระทู้',
      value: 'thread',
      icon: 'fluent:people-community-20-filled',
   },
   {
      id: 3,
      href: PATH.report,
      title: 'โพสต์',
      value: 'post',
      icon: 'ic:round-post-add',
   },
];

export default navConfig;
