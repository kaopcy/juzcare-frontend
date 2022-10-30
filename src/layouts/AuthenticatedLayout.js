import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';

const AuthenticatedLayout = ({ children }) => (
   <>
      <NavBar />
      <main className="min-h-screen w-full p-4 md:p-10 ">{children}</main>
   </>
);

AuthenticatedLayout.propTypes = {
   children: PropTypes.node,
};

export default AuthenticatedLayout;
