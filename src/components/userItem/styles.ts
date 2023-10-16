import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', padding: 10},
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },

  logoStyle: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: 16,
    fontWeight: '300',
  },
  titleStyle: {fontSize: 18, fontWeight: 'bold'},
  roleStyle: {fontSize: 16, color: colors.textGrey},
});
