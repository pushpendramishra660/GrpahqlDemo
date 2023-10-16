import React from 'react';
import {render} from '@testing-library/react-native';
import DetailScreen from '../index';
import {UserStackParamList} from '../../../types/index';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ApolloClient, InMemoryCache} from '@apollo/client';

jest.mock('@react-navigation/native');

jest.mock('@apollo/client', () => ({
  ApolloClient: jest.fn(),
  InMemoryCache: jest.fn(),
  gql: jest.fn()
}));

const mockClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9002/graphql'
});

jest.mock('../../../services/graphql/schema.graphql', () => ({
  useApolloClient: jest.fn(() => mockClient)
}));

type DetailScreenRouteProp = RouteProp<UserStackParamList, 'DETAIL'>;

const mockRouteParams = {
  user: {
    id: '1',
    name: 'User Test',
    email: 'user@example.com',
    role: 'Admin'
  }
};

describe('DetailScreen Component', () => {
  it('renders user details correctly', () => {
    useNavigation.mockReturnValue({
      navigate: jest.fn()
    });
    const route: DetailScreenRouteProp = {
      params: mockRouteParams,
      key: 'DETAIL',
      name: 'DETAIL'
    };
    const {getByText} = render(<DetailScreen route={route} />);
    expect(getByText('Name: User Test')).toBeTruthy();
    expect(getByText('Email: user@example.com')).toBeTruthy();
    expect(getByText('Role: Admin')).toBeTruthy();
  });
});
