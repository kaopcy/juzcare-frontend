import PropTypes from 'prop-types';
import Head from 'next/head';

import ProtectedLayout from './ProtectedLayout';
import AuthLayout from './AuthLayout';
import UnProtectedLayout from './UnProtectedLayout';
import UserLayout from './UserLayout';
import AdminLayout from './AdminLayout';
import useUser from '@/hooks/useUser';

const Layout = ({ variant = 'protected', title, children, ...other }) => {
   const { isInitialized } = useUser();
   return (
      isInitialized && (
         <PageWrapper title={title} {...other}>
            {() => {
               switch (variant) {
                  case 'protected':
                     return <ProtectedLayout {...other}>{children}</ProtectedLayout>;
                  case 'unprotected':
                     return <UnProtectedLayout {...other}>{children}</UnProtectedLayout>;
                  case 'auth':
                     return <AuthLayout {...other}>{children}</AuthLayout>;
                  case 'user':
                     return <UserLayout {...other}>{children}</UserLayout>;
                  case 'admin':
                     return <AdminLayout {...other}>{children}</AdminLayout>;
                  default:
                     return children;
               }
            }}
         </PageWrapper>
      )
   );
};
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
   variant: PropTypes.oneOf(['protected', 'auth', 'unprotected', 'user', 'admin']),
};

export default Layout;
