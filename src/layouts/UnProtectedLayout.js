import PropTypes from 'prop-types';
// components
import NavBar from '@/components/navbar';
import FloatingToolbar from '@/components/floatingToolbar';
import LoadingScreen from '@/components/LoadingScreen';



const UnProtectedLayout = ({ children }) => (
   <>
      <LoadingScreen />
      <NavBar />
      <FloatingToolbar />
      <main className="min-h-screen w-full   text-text">
         <div className="h-navbar w-full" />
         {children}
      </main>
   </>
);

UnProtectedLayout.propTypes = {
   children: PropTypes.node,
};

export default UnProtectedLayout;
