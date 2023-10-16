import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import UsersList from '../index'; // Assuming the component file is named UsersList.tsx
import {MockedProvider} from '@apollo/client/testing';
import {GET_LIST_CUSTOMER} from '../../../services/graphql/queries';

import {NavigationProp, RouteProp} from '@react-navigation/native';

import {UserData} from '../../../types/models';
type RootStackParamList = {
  USERS: undefined;
  DETAIL: {user: UserData};
  // Add more screen names and their params if needed
};

type UsersScreenRouteProp = RouteProp<RootStackParamList, 'USERS'>;

type UsersScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'USERS',
  UsersScreenRouteProp
>;

const mockNavigation: UsersScreenNavigationProp = {
  navigate: jest.fn()
};

const mockUserListResponse = {
  data: {
    listZellerCustomers: {
      items: [
        {id: '1', name: 'User 1', role: 'Admin'},
        {id: '2', name: 'User 2', role: 'Manager'}
      ]
    }
  }
};

const mocks = [
  {
    request: {
      query: GET_LIST_CUSTOMER,
      variables: {
        limit: 100,
        filter: {role: {eq: ''}}
      }
    },
    result: mockUserListResponse
  }
];

describe('UsersList component', () => {
  it('renders user types and admin types correctly', async () => {
    const {getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UsersList navigation={mockNavigation} />
      </MockedProvider>
    );

    const mockData = [
      {id: '1', name: 'User 1', email: 'user1@example.com', role: 'Admin'},
      {id: '2', name: 'User 2', email: 'user2@example.com', role: 'Manager'}
      // Add more mock data as needed
    ];

    // Check if UserItem components are rendered for each item in mockData
    mockData.forEach(({role}) => {
      expect(getByText(role)).toBeTruthy();
    });

    // Wait for the query to complete and the component to render
    await waitFor(() => {
      expect(getByText('User Types')).toBeTruthy();
      expect(getByText('Admin Types')).toBeTruthy();
    });
  });

  it('navigates to the detail screen when user is selected', async () => {
    const {getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UsersList navigation={mockNavigation} />
      </MockedProvider>
    );

    // Wait for the query to complete and the component to render
    await waitFor(() => {
      fireEvent.press(getByText('User 1')); // Assuming 'User 1' is displayed in the list
    });

    // Check if navigation was called with the correct params
    expect(mockNavigation.navigate).toHaveBeenCalledWith('DETAIL', {
      user: {id: '1', name: 'User 1', role: 'Admin'}
    });
  });
});
