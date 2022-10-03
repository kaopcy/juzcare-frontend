import { useSelector } from '@/redux/store';
import PropTypes from 'prop-types';
import Image from 'next/image';
// layout
import Layout from '@/layouts/index';
// gql
import { gql } from '@apollo/client';
import client from '@/graphql/apollo-client';


export default function Home({ results }) {
    const rickandmortys = results.characters.results;
    console.log(rickandmortys);
    const { user, error: userError, isLoading: userLoading, isAuthenticated } = useSelector((state) => state.user);

    return (
        <section className="bg-paper-neutral">
            <h1 className="">{isAuthenticated ? 'authed' : 'unauth'}</h1>
            {userError ? (
                <section className="">{userError}</section>
            ) : userLoading ? (
                <section className="">loading</section>
            ) : (
                <section className="">hello {JSON.stringify(user)}</section>
            )}
            <article className="">
                {rickandmortys.map((rickandmorty) => (
                    <Card key={rickandmorty.id} rickandmorty={rickandmorty} />
                ))}
            </article>
        </section>
    );
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
