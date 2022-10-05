import { useSelector } from '@/redux/store';
import PropTypes from 'prop-types';
import Image from 'next/image';
// layout
import Layout from '@/layouts/index';
// gql
import { gql } from '@apollo/client';
import client from '@/graphql/apollo-client';

// framermotion
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Home({ results }) {
    const rickandmortys = results.characters.results;
    const { user, error: userError, isLoading: userLoading, isAuthenticated } = useSelector((state) => state.user);

    return (
        <section className="bg-paper-neutral flex flex-col">
            <h1 className="">{isAuthenticated ? 'authed' : 'unauth'}</h1>
            {userError ? (
                <section className="">{userError}</section>
            ) : userLoading ? (
                <section className="">loading</section>
            ) : (
                <section className="">hello {JSON.stringify(user)}</section>
            )}
            <article className="flex">
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ translateY: '-100%' }}
                        animate={{ translateY: 0 }}
                        transition={{ duration: 0.4, ease: [0.30, 0.17, 0.80, 1] }}
                        className="text-6xl font-black"
                    >
                        JUZCARE
                    </motion.div>
                </div>
            </article>

            <Test />

        </section>
    );
}

const Test = () => {
    const [selected, setSelected] = useState(0)
    const prevId = useRef(0)
    return (
        <div className=" bg-paper flex flex-col self-start">
            <div className="flex items-center gap-x-3">
                {
                    [...Array(3)].map((_, id) =>
                        <button className={`w-20 py-4 bg-green-300/30  rounded-md ${id === selected && 'bg-red-300/30'}`} key={id} onClick={() => {

                            setSelected(e => {
                                prevId.current = e
                                return id
                            })
                        }} >
                            {id}
                        </button>
                    )
                }
            </div>
            <div

                className="flex items-center overflow-hidden">
                {
                    [...Array(3)].map((_, id) => (
                        id == selected &&
                        <button

                            className='w-full flex flex-col' key={`tab-${id}`} onClick={() => setSelected(id)} >
                            {[...Array(10)].map((_, cIndex) => (
                                <motion.div
                                    initial={{
                                        opacity: 0, translateX: prevId.current > id ? '-100%' : '100%'
                                    }}
                                    animate={{ opacity: 1, translateX: 0 }}
                                    transition={{ duration: 0.4, delay: cIndex * 0.05 }}
                                    key={`button-${id}-${cIndex}`} className="w-full shrink-0 py-4 my-2 bg-black/10">
                                    awdwadaw
                                </motion.div>
                            ))

                            }
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

Home.propTypes = {
    results: PropTypes.object,
};

Home.getLayout = (pages) => (
    <Layout title="หน้าหลัก" variant="authenticated">
        {pages}
    </Layout>
);

const Card = ({ rickandmorty }) => (
    <section className="w-[300px] h-[450px] bg-paper flex flex-col items-center shadow-card ">
        <div className="relative w-20 h-20">
            {rickandmorty.image && (
                <Image
                    priority="low"
                    alt={`${rickandmorty.name}`}
                    src={rickandmorty?.image}
                    objectFit="cover"
                    layout="fill"
                />
            )}
        </div>
        <h2 className="">{rickandmorty?.name}</h2>
    </section>
);

Card.propTypes = {
    rickandmorty: PropTypes.object,
};

export const getStaticProps = async () => {
    const { data: results } = await client.query({
        query: gql`
            query {
                characters(page: 1, filter: { gender: "female" }) {
                    info {
                        count
                        pages
                        prev
                        next
                    }
                    results {
                        name
                        status
                        id
                        image
                    }
                }
            }
        `,
    });

    return {
        props: {
            results,
        },
    };
};
