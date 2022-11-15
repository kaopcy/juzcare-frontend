import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';


const ProtectedLayout = ({ children }) => (
   <>
      <NavBar />
      <main className="w-full min-h-screen overflow-x-hidden text-text">
         <div className="w-full h-navbar" />
         {children}
      </main>
   </>
);

ProtectedLayout.propTypes = {
   children: PropTypes.node,
};

export default ProtectedLayout;
