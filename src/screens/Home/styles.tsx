
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      color: colors.black,
      fontSize: 24,
      marginBottom: 20,
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