import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ClientOnly = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(false);
    }, []);
    if (!isMounted) return null;
    return children;
};

ClientOnly.propTypes = {
    children: PropTypes.node,
};

export default ClientOnly;
