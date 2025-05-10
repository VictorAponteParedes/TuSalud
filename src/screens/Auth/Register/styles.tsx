import { StyleSheet } from "react-native";
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary[100],
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 60,
  },
  modal: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontFamily: fontsOpenSans.regular,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.black,
  },
});
export default styles;