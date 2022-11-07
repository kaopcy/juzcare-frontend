import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion } from 'framer-motion';
// layout
import Layout from '@/layouts/index';
// gql
import { gql } from '@apollo/client';
import client from '@/graphql/apollo-client';
import { useRouter } from 'next/router';

export default function RickAndMorty({ data: rickandmorty, page }) {
   return (
      <section className="flex h-full w-full flex-wrap gap-y-4 overflow-x-hidden bg-transparent">
         {rickandmorty.characters.results.map((e, index) => (
            <Link key={e.id} href={`/rickandmorty/${e.name}`}>
               <motion.div
                  initial={{ opacity: 0, translateX: -50, scale: 0.9 }}
                  animate={{ opacity: 1, translateX: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className=" mx-auto flex min-h-[300px] basis-[100%]  flex-col items-center rounded-md bg-paper p-4 shadow-card hover:bg-red-200 xs:basis-[46%] sm:basis-[31%] lg:basis-[18%]"
               >
                  <div className="relative aspect-square w-full  overflow-hidden rounded-md">
                     <Image priority src={e.image} alt={e.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="py-2 text-lg font-bold ">{e.name}</div>
               </motion.div>
            </Link>
         ))}
         <Pagination totalPage={rickandmorty.characters.info.pages} page={page} />
      </section>
   );
}

RickAndMorty.propTypes = {
   data: PropTypes.object,
   page: PropTypes.number,
};
RickAndMorty.getLayout = (pages) => (
   <Layout title="หน้าหลัก" variant="protected">
      {pages}
   </Layout>
);

const Pagination = ({ totalPage, page }) => {
   const { push } = useRouter();

   if (!totalPage) return null;
   const isMatch = (e) => e == page;
   const onClick = (index) => {
      if (!isMatch(index)) push(`/rickandmorty-serverside?page=${index}`);
   };
   return (
      <div className="flex items-center ">
         {[...Array(totalPage)].map((_, index) => (
            <div
               key={index + 1}
               className={`h-7 w-7 text-center dark:text-paper ${isMatch(index + 1) && 'bg-red-500 '}`}
               onClick={() => onClick(index + 1)}
            >
               {index + 1}
            </div>
         ))}
      </div>
   );
};

Pagination.propTypes = {
   totalPage: PropTypes.number,
   page: PropTypes.number,
   setPage: PropTypes.func,
};

const QUERY = gql`
   query CHARACTER($clientPage: Int) {
      characters(page: $clientPage) {
         info {
            pages
            count
            prev
            next
         }
         results {
            name
            id
            image
            status
         }
      }
   }
`;

export const getServerSideProps = async (ctx) => {
   const page = parseInt(ctx.query.page || 1);
   const { data } = await client.query({
      query: QUERY,
      variables: {
         clientPage: page,
      },
   });

   return {
      props: {
         data: data,
         page,
      },
   };
};
