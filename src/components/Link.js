import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Link = ({ href, children, ...other }) => {
   const router = useRouter();
   const isMatch = useMemo(
      () => (href === '/' ? router.asPath === href : router.asPath.split('?')[0] == href),
      [router.asPath, href]
   );
   return (
      <NextLink passHref href={href} {...other}>
         {typeof children === 'function' ? children({ isMatch }) : children}
      </NextLink>
   );
};

Link.propTypes = {
   href: PropTypes.string,
   children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
};

export default Link;
