import React from 'react';
import {  View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const stories = [
  { id: 1, username: 'Андрей', avatarSource: require('../../assets/avatar1.jpg') },
  { id: 2, username: 'Дмитрий', avatarSource: require('../../assets/avatar2.jpg') },
  { id: 3, username: 'Максим', avatarSource: require('../../assets/avatar3.jpg') },
];

const StoryItem = ({ username, avatarSource}) => {
    return (
      <View style={styles.storyItem}>
          <Image
            style={styles.storyAvatar}
            source={avatarSource}
          />
          <Text style={styles.storyUsername}>{username}</Text>
      </View>
    );

}
const News = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Новости</Text>
        <View style={styles.tabs}>
          <Text style={styles.tabInactive}>Недавние</Text>
          <Text style={styles.tabActive}>Друзья</Text>
          <Text style={styles.tabInactive}>Популярные</Text>
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        <View style={styles.storyItem}>
          <View style={styles.storyAdd}>
            {/* Тут будет типо аватарка текущего пользователя*/}
            <View style={styles.storyAddCircle}>
              <Icon name="add" size={24} color="#fff" />
            </View>
          </View>
        </View>
        
        {stories.map(story => (
          <StoryItem 
            key={story.id}
            username={story.username}
            avatarSource={story.avatarSource}
          />
        ))}
      </ScrollView>
      

      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Image 
              style={styles.avatar}
              source={require('../../assets/avatar1.jpg')}
            />
            <View>
              <Text style={styles.userName}>Андрей Иваков</Text>
              <Text style={styles.timeAgo}>2 часа назад</Text>
            </View>
          </View>
          <Icon name="ellipsis-horizontal" size={20} color="#666" />
        </View>
        
        <Text style={styles.postText}>
          Всем привет! Это мои сокомандники! Я обожаю Дмитрия Аккуратова! Он очень крутой программист! Максимальный репост!
        </Text>
        
        <View style={styles.postImages}>
          <Image 
            style={styles.postImage}
            source={require('../../assets/avatar2.jpg')}
          />
          <Image 
            style={styles.postImage}
            source={require('../../assets/avatar3.jpg')}
          />
        </View>

        <View style={styles.postFooter}>
          <View style={styles.postActions}>
            <Icon name="heart-outline" size={24} color="#666" />
            <Icon name="chatbubble-outline" size={24} color="#666" />
            <Icon name="share-social-outline" size={24} color="#666" />
          </View>
          <View style={styles.postStats}>
            <Icon name="eye-outline" size={20} color="#666" />
            <Text style={styles.statsText}>6355</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    marginBottom: 15,
  },
  tabs: {
    alignItems: 'center',
    width: 'auto',
    alignSelf: 'flex-start',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(65, 105, 225, 0.1)',
    borderRadius: 20,
    gap: 15,
  },
  tabActive: {
    backgroundColor: 'rgba(65, 105, 225, 0.2)',
    borderRadius: 20,
    color: '#000',
    fontWeight: '500',
  },
  tabInactive: {
    color: '#999',
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
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
    color: '#444',
    marginBottom: 10,
    lineHeight: 20,
  },
  postImages: {
    flexDirection: 'row',
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
    paddingHorizontal: 15,
    gap: 15,
    marginBottom: 10,
  },
  storyContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    gap: 15,
    marginBottom: 15,
  },
  storyItem: {
    alignItems: 'center',
    width: 75,
    marginLeft: 10,
  },
  storyUsername: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#000',
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
});

export default News;