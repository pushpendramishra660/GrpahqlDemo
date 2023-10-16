import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useLazyQuery} from '@apollo/client';
import {NavigationProp} from '@react-navigation/native';
import {GET_LIST_CUSTOMER} from '../../services/graphql/queries';
import UserTypes from '../../components/userTypes';
import {styles} from './styles';
import {UserList} from '../../components';
import {UserStackParamList} from '../../types/index';
import {UserData} from '../../types/models';

type UsersScreenNavigationProp = NavigationProp<UserStackParamList, 'USERS'>;

type UsersListScreenProps = {
  navigation: UsersScreenNavigationProp;
};

const UsersList: React.FC<UsersListScreenProps> = ({navigation}) => {
  const [customers, setCustomers] = useState<UserData[]>([]);
  const [userType, setUserType] = useState<string | undefined>('');
  const userTypes = [
    {id: '1', title: 'Admin'},
    {id: '2', title: 'Manager'},
  ];

  const [fetchUserList] = useLazyQuery(GET_LIST_CUSTOMER, {
    onCompleted: ({listZellerCustomers}) => {
      if (listZellerCustomers.items) {
        const array = userType
          ? [...listZellerCustomers.items].filter(
              user => user.role === userType,
            )
          : [...listZellerCustomers.items];
        setCustomers(array);
      }
    },
    onError: e => {
      console.log('e-', e);
    },
  });

  useEffect(() => {
    fetchUserList({
      variables: {
        limit: 100,
        filter: {role: {eq: userType}},
      },
    });
  }, [fetchUserList, userType]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>User Types</Text>
      <UserTypes
        data={userTypes}
        onUserTypeSelection={(type: string) => {
          const uType = userTypes.find(user => user.id === type);
          setUserType(uType?.title);
        }}
      />
      <View style={styles.separator} />
      <Text style={styles.headerTitle}>Admin Types</Text>
      <UserList
        data={customers}
        onSelect={item => {
          navigation.navigate('DETAIL', {user: item});
        }}
      />
    </SafeAreaView>
  );
};

export default UsersList;
