import { StyleSheet } from "react-native";
import colors from "../../theme/colors";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: '#f1f2f6',
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: '#0984e3',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#636e72',
  },
  activeTabText: {
    color: 'white',
  },
  logoutButton: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef'
  },
  logoutText: {
    color: colors.error
  }
});

export default styles;