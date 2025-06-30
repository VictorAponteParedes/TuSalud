
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import sizeText from '../../theme/size';
import { fontsOpenSans } from '../../types/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary[200],
    flexDirection: 'row',

  },
  menuText: {
    fontSize: 16,
    color: colors.primary[400],
    fontFamily: fontsOpenSans.regular,
    marginLeft: 5,
  },
  closeSession: {
    fontSize: 16,
    color: colors.error,
    fontFamily: fontsOpenSans.regular,
    marginLeft: 5,
  },
  menuContainer: {
    flex: 1,
  },

  mainMenu: {
    flex: 1,
  },

  logoutContainer: {
    marginTop: 'auto', // Esto empujará el botón hacia abajo
    paddingBottom: 20, // Espacio extra en la parte inferior
  },

  logoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.primary[200],
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;