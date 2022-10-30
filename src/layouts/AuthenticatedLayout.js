import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';


const AuthenticatedLayout = ({ children }) => (
   <>
      <NavBar />
      <main className="min-h-screen w-full  text-text ">
         <div className="h-navbar w-full" />
         {children}
      </main>
   </>
);

AuthenticatedLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthenticatedLayout;
