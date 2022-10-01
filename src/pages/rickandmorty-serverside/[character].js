import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// layout
import Layout from '@/layouts/index';
// query
import { gql , useQuery } from '@apollo/client'


export default function Character({ ...other }) {
    const router = useRouter();

    return <div className="bg-purple-50">this is {router.query.character}</div>;
}

Character.propTypes = {
    results: PropTypes.object,
};

Character.getLayout = (pages) => {
    return (
        <Layout title={`ตัวละคร`} variant="authenticated">
            {pages}
        </Layout>
    );
};
