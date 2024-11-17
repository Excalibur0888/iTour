import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	captionContainer: {
		position: 'absolute',
		bottom: 50,
		left: 10,
		backgroundColor: '#4D5652',
    padding: 7,
    borderRadius: 15,
	},
	ratingContainer: {
		position: 'absolute',
		flexDirection: 'row',
		alignItems: 'center',
		bottom: 15,
		left: 10,
		backgroundColor: '#4D5652',
    padding: 7,
    borderRadius: 15,
	},
	caption: {
		color: '#fff',
	},
	rating: {
		color: '#fff',
	},
	block: {
		position: 'relative',
		width: 188,
		backgroundColor: '#dadada',
		borderRadius: 30,
		alignItems: 'center',
		marginBottom: 15,
		marginRight: 20,
	},
	image: {
		height: 240,
		marginBottom: 20,
	},
	favoriteButton: {
		position: 'absolute',
		right: 10,
		backgroundColor: '#fff',
		padding: 8,
		borderRadius: 50,
		bottom: 15,
		zIndex: 2,
	},
});

export default styles;