import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
  profileContainer: {
		backgroundColor: '#fff',
	},
  userInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#176FF2',
    shadowColor: '#0ff',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  userName: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 20,
    marginBottom: 5,
  },
  userRole: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#444',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  button: {
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#176FF2',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginRight: 10,
  },
  buttonSecondary: {
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: '#6B7280',
		paddingHorizontal: 55,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'white',
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#176FF2',
  },
  statLabel: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#000',
  },
  scores: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
  },
  itemNumber: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 14,
  },
  itemText: {
    fontFamily: 'Montserrat-SemiBold',
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  itemStatus: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 14,
  },
  line: {
    display: 'flex',
		paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    padding: 15,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 10,
		shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lineText: {
		fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#000',
  },
	lineIcon: {
		flexDirection: 'row',
		alignItems: 'center',

	},
  scoresText: {
    fontSize: 14,
		fontFamily: 'Montserrat-Medium',
    marginHorizontal: 5,
    color: '#176FF2',
  },
  star: {
    width: 25,
    height: 25,
		marginRight: 10,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
