import {ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:9002/graphql',
});

export default client;
