import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    credentials: 'same-origin',
    uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    cache: new InMemoryCache({}),
    link: httpLink,
});

export default client;