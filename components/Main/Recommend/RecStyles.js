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
		borderRadius: 25,
    marginBottom: 200,
    marginRight: 20,
		shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 20,
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
		borderRadius: 25,
		width: 240,
    height: 120,
		backgroundColor: '#dadada',
  },
	caption: {
		fontFamily: 'Montserrat-SemiBold',
		fontSize: 14,
		position: 'relative',
	},
});

export default styles;