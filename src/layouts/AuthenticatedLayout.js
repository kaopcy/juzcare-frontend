import PropTypes from 'prop-types';

const AuthenticatedLayout = ({ children }) => {
    return <div className="">
        {children}
    </div>;
};

AuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default AuthenticatedLayout;
