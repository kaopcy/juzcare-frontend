import Link from '@/components/Link';
import { useState } from 'react';
// icon
import Logo from '../../svg/Logo';
// components
import Notification from './notification';
import ProfileIcon from './profileIcon';
import Sidebar from './Sidebar';
// config
import { PATH } from '@/routes/index';

const NavBar = () => {
   const [isSidebar, setIsSidebar] = useState(false);

   return (
      <>
         <Sidebar isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
         <nav className="fixed z-navbar flex h-[60px] w-full items-center gap-x-4 border-b bg-paper px-4 text-text md:h-navbar">
            <section className="flex h-full items-center ">
               <button
                  onClick={() => setIsSidebar(true)}
                  className="mr-5 ml-4 flex h-full w-[25px] shrink-0  cursor-pointer items-center"
               >
                  <div className="relative block h-[2.2px] w-full shrink-0 rounded-full bg-text before:absolute before:-top-2 before:block before:h-[2.2px] before:w-full before:rounded-full before:bg-text after:absolute after:top-2 after:block after:h-[2.2px] after:w-full after:rounded-full after:bg-text" />
               </button>
               <div className="shrink-0">
                  <Link href={PATH.home}>
                     <div className="flex w-[98px] items-center">
                        <Logo />
                     </div>
                  </Link>
               </div>
            </section>
            <section className="flex h-full w-full items-center justify-end gap-x-6">
               <Notification />
               <ProfileIcon />
            </section>
         </nav>
      </>
   );
};

export default NavBar;
