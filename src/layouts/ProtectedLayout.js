import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';
import FloatingToolbar from '@/components/floatingToolbar';

const ProtectedLayout = ({ children }) => (
   <>
      <NavBar />
      <FloatingToolbar />
      <main className="min-h-screen w-full  overflow-x-hidden text-text">
         <div className="h-navbar w-full" />
         {children}
      </main>
   </>
);

ProtectedLayout.propTypes = {
   children: PropTypes.node,
};

export default ProtectedLayout;
