import NextImage from 'next/image';

function HomeHero() {
   return (
      <section className="flex h-80 w-full items-start justify-center gap-x-16">
         <article className="mt-10 flex flex-col items-start">
            <h1 className="mb-3">ให้เราช่วยเหลือคุณสิ!</h1>
            <p className="text-lg ">ปัญหาภายในมหาลัย สามารถแจ้งผ่าน</p>
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
