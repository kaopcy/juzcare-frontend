// layout
import Layout from '@/layouts/index';
// sections
import HomeHero from '@/sections/home/HomeHero';
import HomeSummary from '@/sections/home/HomeSummary';
import HomeTags from '@/sections/home/HomeTags';

function Home() {
   return (
      <section className="w-full flex flex-col">
         <HomeSummary />
         <HomeHero />
         <HomeTags />
      </section>
   );
}

Home.getLayout = (page) => (
   <Layout variant="authenticated" title="หน้าหลัก">
      {page}
   </Layout>
);

export default Home;
