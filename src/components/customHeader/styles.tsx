import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { fontsOpenSans } from '../../types/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.primary[50],
    paddingVertical: 30,
    borderStartEndRadius: 20,
    borderBottomEndRadius: 20,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fontsOpenSans.regular,
  },
  backButton: {
    fontSize: 16,
    color: colors.white,
    marginHorizontal: 5,
    fontFamily: fontsOpenSans.regular,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 40,
  },
});

export default styles;