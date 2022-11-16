// routes
import { PATH } from '@/routes/index';
// hooks
import useUser from '@/hooks/useUser';
// components
import Link from '@/components/Link';
import UserProfileIcon from '@/components/UserProfileIcon';

const SidebarUserProfile = () => {
   const { user } = useUser();
   return (
      <Link href={PATH.editUser}>
         <section className="mt-auto flex w-full items-center gap-x-3 rounded-md border border-primary px-4 py-2">
            <UserProfileIcon className="h-11 bg-primary/40" />
            <div className="mr-auto flex flex-col items-start">
               <span className="font-medium">{user.username}</span>
               <span className="text-sm text-text-light">{user.email}</span>
            </div>
            <button className="text-sm underline">ดูโปรไฟล์</button>
         </section>
      </Link>
   );
};

export default SidebarUserProfile;
