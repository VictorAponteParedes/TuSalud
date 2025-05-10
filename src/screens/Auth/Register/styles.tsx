import { StyleSheet } from "react-native";
import colors from '../../../theme/colors';
import { Dimensions } from 'react-native';
import { fontsOpenSans } from '../../../types/fonts';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary[100],
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontFamily: fontsOpenSans.regular,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.black,
  },
  modal: {
    width: '100%',
    height: "95%",
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    justifyContent: 'center',
  },
});
export default styles;