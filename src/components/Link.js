import PropTypes from 'prop-types'

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Link = ({ href, children, ...other }) => {
    const router = useRouter();
    const isMatch = useMemo(
        () => (href === '/' ? router.asPath === href : router.asPath.split('?')[0] == href),
        [router.asPath, href]
    );
    return (
        <NextLink  href={href} {...other}>
            {typeof children === 'function' ? children({ isMatch }) : children}
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
}

export default Link;
