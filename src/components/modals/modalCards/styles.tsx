import { StyleSheet } from "react-native";
import {fontsOpenSans} from '../../../types/fonts';
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: fontsOpenSans.regular,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
    fontFamily: fontsOpenSans.regular,
  },
});

export default styles;