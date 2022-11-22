import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
// components
import NavBar from '@/components/navbar';
import LoadingScreen from '@/components/LoadingScreen';
// hooks
import useUser from '@/hooks/useUser';
// path
import { PATH } from '@/routes/index';

const ProtectedLayout = ({ children }) => {
   const { isAuthenticated, isInitialized } = useUser();
   const router = useRouter();
   useEffect(() => {
      if (isInitialized && !isAuthenticated) {
         router.replace(PATH.auth.login);
      }
   }, [isInitialized, isAuthenticated, router]);
   return (
      <>
         <LoadingScreen />
         <NavBar />
         <main className="flex w-full flex-col overflow-y-auto overflow-x-hidden text-text">
            <div className="h-[100px] w-full shrink-0 " />
            {children}
         </main>
      </>
   );
};

ProtectedLayout.propTypes = {
   children: PropTypes.node,
};

export default ProtectedLayout;
