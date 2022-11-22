import PropTypes from 'prop-types';
import ProtectedLayout from '../ProtectedLayout';
import AdminOptionSelector from './AdminOptionSelector';

const AdminLayout = ({ children }) => (
   <ProtectedLayout>
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-stretch gap-x-6 text-text">
         <AdminOptionSelector />
         {children}
      </div>
   </ProtectedLayout>
);

AdminLayout.propTypes = {
   children: PropTypes.node,
};

export default AdminLayout;
