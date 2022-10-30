import NextImage from 'next/image';
import Logo from '@/svg/Logo';

function HomeHero() {
   return (
      <section className="flex min-h-[600px] w-full items-center justify-center gap-x-16">
         <article className="-mt-10 flex flex-col items-start">
            <h1 className="mb-3">ให้เราช่วยเหลือคุณสิ!</h1>
            <div className="flex items-end">
               <p className="text-lg mr-2">ปัญหาภายในมหาลัย สามารถแจ้งผ่าน</p>
               <div className="w-24 mb-1">
                  <Logo/>
               </div>
            </div>
            <p className="text-lg mb-5">ให้เราเป็นคนรวบรวมปัญหาและแจ้งปัญหาแทนคุณเอง</p>
            <button className="text-md rounded-full bg-primary px-4 py-2 text-paper hover:bg-primary-dark">
               แจ้งปัญหา
            </button>
         </article>
         <article className="relative aspect-[9/10] w-72">
            <NextImage src="/images/home/hero_image.jpg" alt="home-hero" layout="fill" objectFit="cover" />
         </article>
      </section>
   );
}

export default HomeHero;
