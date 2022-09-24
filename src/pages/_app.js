import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/globals.css';

import { store } from '@/redux/store';
import { Provider as StoreProvider } from 'react-redux';
import { initialUser } from '@/slices/user'
import { useEffect } from 'react';

const App = (props) => {
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout || ((page) => page);

    useEffect(()=>{
        initialUser()
    },[])

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <StoreProvider store={store}>{getLayout(<Component {...pageProps} />)}</StoreProvider>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
