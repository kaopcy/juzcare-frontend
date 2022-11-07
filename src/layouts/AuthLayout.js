import PropTypes from 'prop-types';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthLayout = ({ children }) => {
   const user = useUser();
   const router = useRouter();
   useEffect(() => {
      console.log(user);
      if (user?._id) {
         console.log('get replaced');
         router.replace('/');
      }
   }, [user, router]);
   return (
      <>
         <main className="relative min-h-screen w-full ">{children}</main>
      </>
   );
};

AuthLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthLayout;
