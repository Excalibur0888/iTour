import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#B8B8B8',
		zIndex: 0,
	},
	title: {
		fontSize: 20,
		textAlign: "left",
		color: '#e8e8e8',
		fontFamily: 'Montserrat-Bold',
		marginBottom: 10
	},
	text: {
		fontFamily: 'CarterOne-Regular',
		fontSize: 20,
		textAlign: 'center',
		color: '#e8e8e8'
	},
	caption: {
			position: "absolute",
			top: 10,
			left: 10,
			color: "white",
			fontSize: 18,
			fontFamily: "mt-caption",
			fontWeight: "bold",
	}
});
