import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';
import FloatingToolbar from '@/components/floatingToolbar'


const AuthenticatedLayout = ({ children }) => (
   <>
      <NavBar />
      <FloatingToolbar />
      <main className="min-h-screen w-full  text-text overflow-x-hidden">
         <div className="h-navbar w-full" />
         {children}
      </main>
   </>
);

AuthenticatedLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthenticatedLayout;   
