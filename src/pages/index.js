import { useSelector } from '@/redux/store';
// layout
import Layout from '@/layouts/index';
export default function Home() {
    const { user, error: userError, isLoading: userLoading , isAuthenticated } = useSelector((state) => state.user);

    return (
        <section className="bg-paper-neutral">
            <h1 className="">{isAuthenticated ? 'authed' : 'unauth'}</h1>
            {userError ? (
                <section className="">{userError.message}</section>
            ) : userLoading ? (
                <section className="">loading</section>
            ) : (
                <section className="">hello {JSON.stringify(user)}</section>
            )}
        </section>
    );
}

Home.getLayout = (pages) => (
    <Layout title="หน้าหลัก" variant="authenticated">
        {pages}
    </Layout>
);
