// routes
import { PATH } from '@/routes/index';
// hooks
import useUser from '@/hooks/useUser';
// components
import Link from '@/components/Link';
import Image from 'next/image';

const SidebarUserProfile = () => {
   const { user } = useUser();
   return (
      <Link href={PATH.editUser}>
         <section className="flex items-center w-full px-4 py-2 mt-auto border rounded-md gap-x-3 border-primary">
            <div className="relative mr-2 overflow-hidden rounded-full h-11 w-11 bg-primary/40">
               <Image alt={user._id} src={user.avatar.avatarUrl} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col items-start mr-auto">
               <span className="font-medium">{user.username}</span>
               <span className="text-sm text-text-light">{user.email}</span>
            </div>
            <button className="text-sm underline">ดูโปรไฟล์</button>
         </section>
      </Link>
   );
};

export default SidebarUserProfile;
