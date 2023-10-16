import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserStack from './user.stack';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <UserStack />
    </NavigationContainer>
  );
}
