import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {UserStackParamList} from '../../types/index';
import {styles} from './styles';

type DetailScreenRouteProp = RouteProp<UserStackParamList, 'DETAIL'>;

type DetailScreenProps = {
  route: DetailScreenRouteProp;
};

const DetailScreen: React.FC<DetailScreenProps> = ({route}) => {
  const navigation = useNavigation();

  const {user} = route.params;
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        hitSlop={{top: 10, bottom: 10, left: 40, right: 40}}
        onPress={handleBackPress}
        style={styles.backButton}>
        <Text>{'⬅'}</Text>
      </TouchableOpacity>
      <View style={styles.profilePic}>
        <Text style={styles.logoStyle}>
          {user.name?.charAt(0)?.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Role: {user.role}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;
