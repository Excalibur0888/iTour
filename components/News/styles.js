import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    marginBottom: 70,
  },
  header: {
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },

  post: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },
  timeAgo: {
    fontFamily: 'Montserrat-Medium',
    color: '#666',
    fontSize: 12,
  },
  postText: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    marginBottom: 10,
    lineHeight: 20,
  },
  postImages: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 10,
  },
  postImage: {
    flex: 1,
    height: 150,
    borderRadius: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statsText: {
    color: '#666',
  },
  postActions: {
    flexDirection: 'row',
    gap: 15,
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#4169E1',
  },
  storiesContainer: {
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  storyItem: {
    alignItems: 'center',
    width: 75,
    marginLeft: 10,
  },
  storyUsername: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#4169E1',
    textAlign: 'center',
  },
  storyAdd: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyAddCircle: {
    position: 'absolute',
    bottom: -3,
    right: -7,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthImage: {
    flex: 1,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  halfImagesContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  halfImage: {
    flex: 1,
    height: 200,
    borderRadius: 10,
  },
  paragraphsContainer: {
    marginBottom: 10,
    gap: 10,
  },

});

export default styles;