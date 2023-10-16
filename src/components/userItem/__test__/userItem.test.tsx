import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserItem from '../index';
import {UserData} from '../../../types/models';

const mockUserData: UserData = {
  id: '1',
  name: 'Pushpendra Mishra',
  role: 'Admin',
  email: 'pushpendra@email.com',
};

describe('UserItem Component', () => {
  it('renders correctly with provided user data', () => {
    const {getByText} = render(
      <UserItem item={mockUserData} onSelect={() => {}} />,
    );
    expect(getByText('Pushpendra Mishra')).toBeTruthy();
    expect(getByText('Admin')).toBeTruthy();
  });

  it('calls onSelect when pressed', () => {
    const mockOnSelect = jest.fn();
    const {getByText} = render(
      <UserItem item={mockUserData} onSelect={mockOnSelect} />,
    );
    fireEvent.press(getByText('Pushpendra Mishra'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockUserData);
  });

  it('displays the first letter of the name as the logo', () => {
    const {getByText} = render(
      <UserItem item={mockUserData} onSelect={() => {}} />,
    );
    expect(getByText('P')).toBeTruthy();
  });
});
