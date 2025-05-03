
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import sizeText from '../../theme/size';
import { fontsOpenSans } from '../../types/fonts';

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
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});

export default styles;