// layout
import Layout from '@/layouts/index';
// sections
import HomeHero from '@/sections/home/HomeHero';
import HomeSummary from '@/sections/home/HomeSummary';
import HomeTags from '@/sections/home/HomeTags';
import HomeContents from '@/sections/home/HomeContents';
// contexts
import { ReportsProvider } from '@/contexts/Home/ReportsContext';

function Home() {
   return (
      <section className="flex w-full flex-col">
         <HomeSummary />
         <HomeHero />
         <ReportsProvider>
            <section className="flex min-h-[600px] w-full max-w-[750px] flex-col items-center gap-x-16  self-center px-4  md:px-0">
               <HomeTags />
               <HomeContents />
            </section>
         </ReportsProvider>
      </section>
   );
}

Home.getLayout = (page) => (
   <Layout variant="unprotected" title="หน้าหลัก">
      {page}
   </Layout>
);

export default Home;
