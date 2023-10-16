import React from 'react';
import {FlatList} from 'react-native';
import UserItem from '../userItem/index';
import {UserData} from '../../types/models';

interface CustomerListProps {
  data: UserData[];
  onSelect: (value: UserData) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({data = [], onSelect}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <UserItem item={item} onSelect={value => onSelect(value)} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default CustomerList;
