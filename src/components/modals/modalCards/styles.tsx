import { StyleSheet } from "react-native";
import {fontsOpenSans} from '../../../types/fonts';

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  title: {
    fontSize: 16,
    fontFamily: fontsOpenSans.regular,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    fontFamily: fontsOpenSans.regular,
  },
});

  export default styles;