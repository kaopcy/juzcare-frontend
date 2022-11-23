import NextImage from 'next/image';
import Logo from '@/svg/Logo';
import Link from '@/components/Link';

import { PATH } from '@/routes/index';

function HomeHero() {
   return (
      <section className="mt-32 flex min-h-[600px]  max-w-[800px] flex-col items-center justify-center gap-x-16 self-center px-4 md:mt-0 md:flex-row md:px-0">
         <article className="-mt-10 flex flex-col items-center md:items-start">
            <h1 className="mb-3">ให้เราช่วยเหลือคุณสิ!</h1>
            <div className="flex items-end ">
               <span className="mr-2 text-lg ">ปัญหาภายในมหาลัย สามารถแจ้งผ่าน</span>
               <div className="mb-1 hidden w-24 md:block">
                  <Logo />
               </div>
            </div>
            <span className="mb-5 text-center text-lg md:text-start">ให้เราเป็นคนรวบรวมปัญหาและแจ้งปัญหาแทนคุณเอง</span>
            <Link href={PATH.createReport}>
               <a className="text-md rounded-full bg-primary px-4 py-2 text-paper hover:bg-primary-dark">ตั้งกระทู้</a>
            </Link>
         </article>
         <article className="relative mt-16 aspect-[9/10] w-64 md:mt-0 md:w-72">
            <NextImage src="/images/home/hero_image.jpg" alt="home-hero" layout="fill" objectFit="cover" />
         </article>
      </section>
   );
}

export default HomeHero;
