
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import sizeText from '../../theme/size';
import {fontsOpenSans} from '../../types/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: sizeText.title.title,
    marginBottom: 20,
    fontFamily: fontsOpenSans.regular,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  logoutText: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: 'blue',
  },
});

  export default styles;