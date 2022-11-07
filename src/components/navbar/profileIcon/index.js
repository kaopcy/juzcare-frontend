import Image from 'next/image';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';

function ProfileIcon() {
   const user = useUser();
   useEffect(() => {
      console.log('user: ', user);
   }, [user]);
   
   return (
      <div className="relative aspect-square h-12 rounded-full border border-primary-light p-0.5">
         <div className="relative h-full w-full overflow-hidden rounded-full bg-primary-light">
            <Image src="https://avatars.dicebear.com/api/bottts/12.svg" alt="avatar" layout="fill" objectFit="cover" />
         </div>
      </div>
   );
}

export default ProfileIcon;
