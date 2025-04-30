import { StyleSheet } from "react-native";
import colors from '../../../theme/colors';
import { Dimensions } from 'react-native';
import {fontsOpenSans} from '../../../types/fonts';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary[400],
    alignItems: 'center',
    paddingTop: 60,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontFamily: fontsOpenSans.regular,
    color: colors.white,
    marginTop: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    color: colors.white,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: fontsOpenSans.regular,
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.5,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    justifyContent: 'center',
  },
});
export default styles;  