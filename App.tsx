/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import AppNavigator from './src/navigations/navigations';
import client from './src/services/graphql/apollo';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </ApolloProvider>
  );
}

export default App;
