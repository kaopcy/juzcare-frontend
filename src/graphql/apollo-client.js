import { getStoredToken } from '@/utils/storageUtils';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = getStoredToken();
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

const httpLink = new HttpLink({
   credentials: 'same-origin',
   uri: 'https://api-juzcare.celab.network/graphql',
});

const client = new ApolloClient({
   cache: new InMemoryCache({}),
   link: authLink.concat(httpLink),
});

export default client;
