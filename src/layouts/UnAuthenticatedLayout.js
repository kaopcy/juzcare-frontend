import PropTypes from 'prop-types';

const UnAuthenticatedLayout = ({ children }) => {
    console.log('hello from authenticated');
    return (
        <>
            <main className="w-full relative min-h-screen ">{children}</main>
        </>
    );
};

UnAuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default UnAuthenticatedLayout;
