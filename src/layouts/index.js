import PropTypes from 'prop-types';
import Head from 'next/head';

import AuthenticatedLayout from './AuthenticatedLayout';

const Layout = ({ variant = 'authenticated', title, children, ...other }) => (
    <PageWrapper title={title} {...other}>
        {() => {
            switch (variant) {
                case 'authenticated':
                    return <AuthenticatedLayout {...other}>{children}</AuthenticatedLayout>;
                default:
                    return children;
            }
        }}
    </PageWrapper>
);
const PageWrapper = ({ title, children }) => (
    <>
        <Head>
            <title>{`${title} | JuzCare`}</title>
        </Head>
        {children()}
    </>
);

PageWrapper.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Layout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['authenticated']),
};

export default Layout;
