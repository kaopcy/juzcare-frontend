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
      <Link href={PATH.auth.login}>
         <section className="mt-auto flex w-full items-center gap-x-3 px-4 py-2 border border-primary rounded-md">
            <div className="relative h-11 w-11 overflow-hidden rounded-full mr-2 bg-primary/40">
               <Image alt={user._id} src={user.avatar.avatarUrl} layout="fill" objectFit="cover" />
            </div>
            <div className="mr-auto flex flex-col items-start">
               <span className="font-medium">{user.username}</span>
               <span className="text-sm text-text-light">{user.email}</span>
            </div>
            <button className="underline text-sm">ดูโปรไฟล์</button>
         </section>
      </Link>
   );
};

export default SidebarUserProfile;
