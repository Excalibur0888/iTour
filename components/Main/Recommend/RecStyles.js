import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  block: {
    height: 160,
    position: "relative",
		borderWidth: 1,
		borderColor: '#e0e0e0',
		padding: 4,
		borderRadius: 25,
    marginBottom: 70,
    marginRight: 20,
  },
  image: {
		borderRadius: 25,
		width: 240,
    height: 120,
		backgroundColor: '#dadada',
  },
	dimensions: {
		position: 'absolute',
		borderRadius: 25,
		paddingHorizontal: 4,
		paddingVertical: 1,
		borderColor: '#fff',
		borderWidth: 3,
		bottom: 20,
		left: 170,
		backgroundColor: '#3A544F',
	},
	dimensions__text: {
		fontFamily: 'Montserrat-SemiBold',
		color: '#fff',
	},
	caption: {
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 14,
		color: '#000',
	},
});

export default styles;