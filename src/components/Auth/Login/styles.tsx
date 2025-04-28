import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  DontHaveAccount: {
    fontSize: 14,
    color: colors.black,
    marginTop: 10,
    textAlign: 'center',
  },
  customHandle: {
    width: '100%',
    height: 30,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  registerButton: {
    backgroundColor: colors.primary[500],
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
  },
  registerText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
export default styles;
