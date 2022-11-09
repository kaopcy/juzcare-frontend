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
      href: PATH.reports,
      title: 'กระทู้',
      value: 'reports',
      icon: 'fluent:people-community-20-filled',
   },
   {
      id: 3,
      href: PATH.createReport,
      title: 'โพสต์',
      value: 'createReport',
      icon: 'ic:round-post-add',
   },
];

export default navConfig;
