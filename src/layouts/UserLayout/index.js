import PropTypes from 'prop-types';
import ProtectedLayout from '../ProtectedLayout';
import UserOptionSelector from './UserOptionSelector';

const UserLayout = ({ children }) => (
   <ProtectedLayout>
      <div className="flex w-full items-start justify-center text-text gap-x-6">
         <UserOptionSelector />
         {children}
      </div>
   </ProtectedLayout>
);

UserLayout.propTypes = {
   children: PropTypes.node,
};

export default UserLayout;
