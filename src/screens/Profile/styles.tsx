import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontsOpenSans } from "../../types/fonts";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: colors.grayLight,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary[400],
  },
  tabText: {
    fontSize: 12,
    fontFamily: fontsOpenSans.regular,
    color: colors.primary[400],
  },
  activeTabText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20
  },
  paddingContainer: {
    padding: 20
  },
  logoutButton: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef'
  },
  logoutText: {
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  containerImage: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 15,
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.primary[400],
    borderWidth: 5,
  },
  placeholder: {
    backgroundColor: '#0984e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fontsOpenSans.regular,
  },
  userNameText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fontsOpenSans.regular,
    marginTop: 10,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  editButtonBackground: {
    backgroundColor: colors.primary[300],
    borderRadius: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;