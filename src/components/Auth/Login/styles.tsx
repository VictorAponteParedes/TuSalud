import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';
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
    backgroundColor: colors.white,
    borderRadius: 8,
    borderColor: colors.primary[400],
    borderWidth: 1,
    padding: 12,
    marginTop: 16,
  },
  registerText: {
    color: colors.primary[400],
    fontSize: 16,
    textAlign: 'center',
    fontFamily: fontsOpenSans.regular,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: colors.primary[400],
    fontSize: 14,
    fontFamily: fontsOpenSans.regular,
    textDecorationLine: 'underline',
  },
});
export default styles;
