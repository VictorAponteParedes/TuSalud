import { StyleSheet } from "react-native";
import { fontsOpenSans } from '../../../types/fonts';
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 120, // Altura reducida para la imagen
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 12,
    paddingBottom: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: fontsOpenSans.regular,
    color: colors.gray[800],
    marginBottom: 6,
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 12,
    color: colors.gray[600],
    fontFamily: fontsOpenSans.regular,
    lineHeight: 16,
  },
});

export default styles;