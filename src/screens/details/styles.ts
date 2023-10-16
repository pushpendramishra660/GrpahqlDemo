import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  logoStyle: {
    textAlign: 'center',
    color: colors.blue,
    fontSize: 16,
    fontWeight: '300',
  },
  backButton: {position: 'absolute', top: 50, left: 20},
});
