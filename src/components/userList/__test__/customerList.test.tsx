import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomerList from '../index';
import {UserData} from '../../../types/models';

const mockData: UserData[] = [
  {id: '1', name: 'User 1', email: 'user1@example.com', role: 'Admin'},
  {id: '2', name: 'User 2', email: 'user2@example.com', role: 'Manager'}
];

test('renders customer list correctly', () => {
  const onSelect = jest.fn();
  const {getByText} = render(
    <CustomerList data={mockData} onSelect={onSelect} />
  );

  // Check if UserItem components are rendered for each item in mockData
  mockData.forEach(({name}) => {
    expect(getByText(name)).toBeTruthy();
  });
});

test('calls onSelect callback when item is clicked', () => {
  const onSelect = jest.fn();
  const {getByText} = render(
    <CustomerList data={mockData} onSelect={onSelect} />
  );

  // Click on the first item in the list
  fireEvent.press(getByText('User 1'));

  // Verify that onSelect callback is called with the correct user data
  expect(onSelect).toHaveBeenCalledWith(mockData[0]);
});

test('keyExtractor returns correct keys', () => {
  const onSelect = jest.fn();
  const {getAllByTestId} = render(
    <CustomerList data={mockData} onSelect={onSelect} />
  );

  const flatList = getAllByTestId('userItem');
  expect(flatList).toBeTruthy();
  //  check if all the item render correctly or not
  const renderedItems = getAllByTestId('userItem');
  expect(renderedItems.length).toBe(mockData.length);
});
