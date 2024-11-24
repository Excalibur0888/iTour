import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchInput: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
		paddingHorizontal: 10,
    zIndex: 1,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  suggestionsList: {
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200,
    zIndex: 2,
    elevation: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  suggestionTitle: {
    fontWeight: 'bold',
  },
  suggestionSubtitle: {
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    position: 'absolute',
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'row',
    bottom: 90,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  infoText: {
		color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  routeButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  routeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
	nightmode: {
    backgroundColor: '#fff',
    position: 'absolute',
    padding: 10,
    borderRadius: 50,
    top: 70,
    left: 10,
    zIndex: 2,
  },
  nightmodeActive: {
    backgroundColor: '#000',
  },
});

export default styles;