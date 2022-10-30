import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';

const AuthenticatedLayout = ({ children }) => (
   <>
      <NavBar />
      <main className="min-h-screen w-full p-4 text-text md:p-10">
         <div className="h-navbar w-full" />
         {children}
      </main>
   </>
);

AuthenticatedLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthenticatedLayout;
