import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserTypes from '../index';
import {UserType} from '../../../types/models';

const mockData: UserType[] = [
  {id: '1', title: 'Admin'},
  {id: '2', title: 'Manager'}
];

test('renders user Types correctly', () => {
  const onUserTypeSelection = jest.fn();
  const {getByText} = render(
    <UserTypes data={mockData} onUserTypeSelection={onUserTypeSelection} />
  );

  // Check if UserItem components are rendered for each item in mockData
  mockData.forEach(({title}) => {
    expect(getByText(title)).toBeTruthy();
  });
});

test('calls onUserTypeSelection callback when item is clicked', () => {
  const onUserTypeSelection = jest.fn();
  const {getByText} = render(
    <UserTypes data={mockData} onUserTypeSelection={onUserTypeSelection} />
  );

  // Click on the first item in the list
  fireEvent.press(getByText('Admin'));

  // Verify that onUserTypeSelection callback is called with the correct user data
  expect(onUserTypeSelection).toHaveBeenCalledWith(mockData[0].id);
});
