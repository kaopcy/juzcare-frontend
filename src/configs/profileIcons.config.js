import { PATH } from '@/routes/index';
import { dispatch } from '@/redux/store';
import { signOut } from '@/slices/user';

export const dropdownItems = [
   {
      id: 'dropfile-dropdownIcon-1234',
      icon: 'clarity:note-edit-solid',
      label: 'แก้ไขโปรไฟล์',
      href: PATH.user.edituser,
   },
   {
      id: 'dropfile-dropdownIcon-12345',
      icon: 'ic:baseline-history',
      label: 'ดูประวัติการแจ้งปัญหา',
      href: PATH.user.history,
   },
   {
      id: 'dropfile-dropdownIcon-12346',
      icon: 'clarity:sign-out-solid',
      label: 'ออกจากระบบ',
      action: () => {
         dispatch(signOut());
      },
   },
];

export const unAuthDropdownItems = [
   {
      id: 'un-dropfile-dropdownIcon-1234',
      icon: 'clarity:sign-in-solid',
      label: 'เข้าสู่ระบบ',
      href: PATH.auth.login,
   },
];
