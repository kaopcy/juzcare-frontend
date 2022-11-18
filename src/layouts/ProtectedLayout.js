import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// components
import NavBar from '@/components/navbar';
// hooks
import useUser from '@/hooks/useUser';
// path
import { PATH } from '@/routes/index';

const ProtectedLayout = ({ children }) => {
   const { isAuthenticated, isInitialized } = useUser();
   const router = useRouter();
   useEffect(() => {
      console.log(isInitialized, isAuthenticated);
      if (isInitialized && !isAuthenticated) {
         router.replace(PATH.auth.login);
      }
   }, [isInitialized, isAuthenticated, router]);
   return (
      <>
         <NavBar />
         <main className="h-1 min-h-screen  w-full overflow-x-hidden text-text">
            <div className="h-navbar w-full" />
            {children}
         </main>
      </>
   );
};

ProtectedLayout.propTypes = {
   children: PropTypes.node,
};

export default ProtectedLayout;
