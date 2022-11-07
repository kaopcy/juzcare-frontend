import { useSelector } from '@/redux/store';
import PropTypes, { number } from 'prop-types';
import Image from 'next/image';
// layout
import Layout from '@/layouts/index';
// gql
import Link from 'next/link';

// hooks
import useRickandMorty from '@/hooks/useRickandMorty';

export default function RickAndMorty({ page: initPage }) {
    const { rickandmorty, loading, totalPage, setPage, page } = useRickandMorty(initPage);

    return (
        <section className="bg-purple-100 w-full h-full flex flex-wrap ">
            {loading && <div className="">loading</div>}

            {rickandmorty &&
                rickandmorty.characters.results.map((e) => (
                    <Link key={e.id} href={`/rickandmorty/${e.name}`}>
                        <div className=" hover:bg-red-200 basis-48  px-4 py-2 shadow-card rounded-md bg-paper h-[300px] flex flex-col items-center">
                            <div className="font-bold py-2 text-lg">{e.name}</div>
                            <div className="w-full relative aspect-square  ">
                                <Image priority src={e.image} alt={e.name} layout="fill" objectFit="cover" />
                            </div>
                            <div className="">{totalPage}</div>
                        </div>
                    </Link>
                ))}
            <Pagination totalPage={totalPage} page={page} setPage={setPage} />
        </section>
    );
}

RickAndMorty.propTypes = {
    page: PropTypes.number,
};
RickAndMorty.getLayout = (pages) => (
    <Layout title="หน้าหลัก" variant="protected">
        {pages}
    </Layout>
);

const Pagination = ({ totalPage, setPage, page }) => {
    if (!totalPage) return null;
    const isMatch = (e) => e == page;

    return (
        <div className="flex items-center ">
            {[...Array(totalPage)].map((_, index) => (
                <div
                    key={index + 1}
                    className={`p-2 ${isMatch(index + 1) && 'bg-red-500'}`}
                    onClick={() => setPage(index + 1)}
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

export const getServerSideProps = async (ctx) => ({
    props: {
        page: parseInt(ctx.query.page),
    },
});
