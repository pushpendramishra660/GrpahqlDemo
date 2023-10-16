import {ApolloClient, InMemoryCache} from '@apollo/client';
import Config from "react-native-config";


const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri:  Config.API_URL,
});

export default client;
