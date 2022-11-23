import useUser from '@/hooks/useUser';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ProtectedLayout from '../ProtectedLayout';
import AdminOptionSelector from './AdminOptionSelector';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
   const router = useRouter();
   const { user, isInitialized } = useUser();

   useEffect(() => {
      if (isInitialized && (!user || user.role === 'user')) router.replace('/');
   }, [isInitialized, user, router]);

   return (
      <ProtectedLayout>
         <div className="mx-auto flex w-full max-w-[1000px] flex-col items-stretch gap-x-6 text-text">
            <AdminOptionSelector />
            {children}
         </div>
      </ProtectedLayout>
   );
};

AdminLayout.propTypes = {
   children: PropTypes.node,
};

export default AdminLayout;
