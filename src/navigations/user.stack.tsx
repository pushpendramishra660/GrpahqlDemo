import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UsersScreen, DetailScreen} from '../screens';
import {UserStackParamList} from '../types';

const Stack = createNativeStackNavigator<UserStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'USERS'} component={UsersScreen} />
      <Stack.Screen name={'DETAIL'} component={DetailScreen} />
    </Stack.Navigator>
  );
}
