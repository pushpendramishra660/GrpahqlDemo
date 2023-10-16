import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {UserData} from '../../types/models';

interface UserItemProps {
  item: UserData;
  onSelect: (value: UserData) => void;
}

const UserItem: React.FC<UserItemProps> = ({item, onSelect}) => {
  return (
    <TouchableOpacity
      testID="userItem"
      onPress={() => onSelect(item)}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoStyle}>
          {item.name?.charAt(0)?.toUpperCase()}
        </Text>
      </View>
      <View>
        <Text style={styles.titleStyle}>{item.name}</Text>
        <Text style={styles.roleStyle}>{item.role}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;
