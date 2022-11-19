import { getStoredToken } from '@/utils/storageUtils';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
   credentials: 'same-origin',
   uri: 'https://api-juzcare.celab.network/graphql',
   headers: {
      authorization: `Bearer ${getStoredToken()}`,
   },
});

const client = new ApolloClient({
   cache: new InMemoryCache({}),
   link: httpLink,
});

export default client;
