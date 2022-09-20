import PropTypes from 'prop-types';
import '../styles/globals.css';

const _app = ({ Component, pageProps }) => <Component {...pageProps} />;

_app.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.any,
};

export default _app;
