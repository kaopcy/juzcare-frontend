import PropTypes from 'prop-types';
import NavBar from '@/components/navbar';

const AuthenticatedLayout = ({ children }) => {
    console.log('hello from authenticated');
    return (
        <>
            <NavBar />
            <main className="w-full min-h-screen p-10 bg-orange-400/10 dark:bg-black">{children}</main>
        </>
    );
};

AuthenticatedLayout.propTypes = {
    children: PropTypes.node,
};

export default AuthenticatedLayout;
