// components
import Icon from '@/components/Icon';
import Link from '@/components/Link';

import Logo from '@/svg/Logo';
// path
import { PATH } from '@/routes/index';

function ReportsPersuade() {
   return (
      <section className="flex h-56 w-full items-center gap-x-10 bg-gray-200/10 px-10 shadow-md">
         <Logo width="100%" />
         <div className="flex w-full flex-col items-center gap-y-5">
            <div className="flex items-center">
               <Icon className="mr-2 h-8 w-8" icon="akar-icons:comment-add" />
               <span className="whitespace-nowrap text-2xl font-bold ">เพิ่มกระทู้ของคุณเอง</span>
            </div>
            <Link href={PATH.createReport} >
               <a className="rounded-full bg-primary px-7 py-1 text-lg text-paper">
                  ตั้งกระทู้
               </a>
            </Link>
         </div>
      </section>
   );
}

export default ReportsPersuade;
