import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

// redux
import { store } from '@/redux/store';
import { Provider as StoreProvider } from 'react-redux';
import { initialUser } from '@/slices/user';

// apollo
import client from '@/graphql/apollo-client';
import { ApolloProvider } from '@apollo/client';

// context
import { ThemeModeProvider } from '@/contexts/ThemeMode';

const App = (props) => {
    const { Component, pageProps } = props;
    const getLayout = Component.getLayout || ((page) => page);

    useEffect(() => {
        initialUser();
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ApolloProvider client={client}>
                <StoreProvider store={store}>
                    <ThemeModeProvider>{getLayout(<Component {...pageProps} />)}</ThemeModeProvider>
                </StoreProvider>
            </ApolloProvider>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};

export default App;
