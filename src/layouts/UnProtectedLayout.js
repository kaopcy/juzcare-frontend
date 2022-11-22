import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
// components
import NavBar from '@/components/navbar';
import FloatingToolbar from '@/components/floatingToolbar';
import LoadingScreen from '@/components/LoadingScreen';
import ImageGallery from '@/components/ImageGallery';

const UnProtectedLayout = ({ children }) => (
   <>
      
         <ImageGallery />
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
