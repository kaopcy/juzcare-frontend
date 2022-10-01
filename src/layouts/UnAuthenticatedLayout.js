import PropTypes from 'prop-types';

const UnAuthenticatedLayout = ({ children }) => {
    console.log('hello from authenticated');
    return (
        <>
            <main className="w-full h-full bg-paper p-10">{children}</main>
        </>
    );
};

UnAuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default UnAuthenticatedLayout;
