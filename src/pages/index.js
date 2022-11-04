// layout
import Layout from '@/layouts/index';
// sections
import HomeHero from '@/sections/home/HomeHero';
import HomeSummary from '@/sections/home/HomeSummary';
import HomeTags from '@/sections/home/HomeTags';

import Icon from '@/components/Icon';

function Home() {
   return (
      <section className="flex flex-col w-full">
         <Icon icon={"ant-design:home-filled"} />
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
