import PropTypes from 'prop-types';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthLayout = ({ children }) => {
   const { isAuthenticated } = useUser();
   const router = useRouter();
   useEffect(() => {
      if (isAuthenticated) {
         router.replace('/');
      }
   }, [isAuthenticated, router]);
   return (
      <>
         <main className="relative min-h-screen w-full text-text ">{children}</main>
      </>
   );
};

AuthLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthLayout;
