import PropTypes from 'prop-types';

const UnAuthenticatedLayout = ({ children }) => (
        <>
            <main className="w-full relative min-h-screen ">{children}</main>
        </>
    );

UnAuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default UnAuthenticatedLayout;
