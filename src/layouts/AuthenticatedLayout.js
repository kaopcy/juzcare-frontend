import PropTypes from 'prop-types';

const AuthenticatedLayout = ({ children }) => {
     console.log('hello from authenticated')
    return <main className="w-full h-full bg-red-500 p-10">{children}</main>;
};

AuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default AuthenticatedLayout;
