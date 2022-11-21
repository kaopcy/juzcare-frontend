import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/nprogress.css';
import '../styles/apexchart.css';
import '../styles/swiper.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// redux
import { store, dispatch } from '@/redux/store';
import { Provider as StoreProvider } from 'react-redux';
import { initialRequest } from '@/redux/slices/user';
// apollo
import client from '@/graphql/apollo-client';
import { ApolloProvider } from '@apollo/client';
// context
import { ThemeModeProvider } from '@/contexts/ThemeMode';
// components
import ProgressBar from '@/components/ProgressBar';
import { addCollection } from '@iconify/react/dist/offline';
import _iconsbundle from '../_iconsbundle.json';

_iconsbundle.forEach((element) => {
   addCollection(element);
});

const App = (props) => {
   const { Component, pageProps } = props;
   const getLayout = Component.getLayout || ((page) => page);

   useEffect(() => {
      dispatch(initialRequest());
   }, []);

   return (
      <>
         <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
         </Head>
         <ApolloProvider client={client}>
            <StoreProvider store={store}>
               <ThemeModeProvider>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
               </ThemeModeProvider>
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
