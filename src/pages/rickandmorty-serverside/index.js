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

export default function RickAndMorty({ data: rickandmorty, page }) {
    return (
        <section className="bg-transparent w-full h-full flex flex-wrap p-5 gap-2 overflow-x-hidden">
            {rickandmorty.characters.results.map((e, index) => (
                <Link key={e.id} href={`/rickandmorty/${e.name}`}>
                    <motion.div
                        initial={{ opacity: 0, translateX: -50, scale: 0.9 }}
                        animate={{ opacity: 1, translateX: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className=" hover:bg-red-200 w-48 m-auto p-4 shadow-card rounded-md bg-paper h-[300px] flex flex-col items-center"
                    >
                        <div className="w-full relative aspect-square  rounded-md overflow-hidden">
                            <Image priority src={e.image} alt={e.name} layout="fill" objectFit="cover" />
                        </div>
                        <div className="font-bold py-2 text-lg ">{e.name}</div>
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
    <Layout title="หน้าหลัก" variant="authenticated">
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
                    className={`w-7 text-center h-7 dark:text-paper ${isMatch(index + 1) && 'bg-red-500 '}`}
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
