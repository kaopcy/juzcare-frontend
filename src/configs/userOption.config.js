import { PATH } from '../routes';

export const optionRoutes = [
   {
      id: 1,
      href: PATH.user.edituser,
      title: 'แก้ไขโปรไฟล์',
      icon: 'clarity:note-edit-solid',
   },
   {
      id: 2,
      href: PATH.user.history,
      title: 'ดูประวัติการแจ้งปัญหา',
      icon: 'ic:baseline-history',
   },
   {
      id: 3,
      href: PATH.user.review,
      title: 'รีวิวการแก้ปัญหา',
      icon: 'akar-icons:star',
   },
];
