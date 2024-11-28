// components/News.js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StoryItem from './StoryItem';
import PostItem from './PostItem';
import styles from './styles';

// Список историй
const stories = [
  { id: 1, username: 'Дмитрий', avatarSource: require('../../assets/avatar4.jpg') },
  { id: 2, username: 'Никита', avatarSource: require('../../assets/avatar2.jpg') },
  { id: 3, username: 'Дмитрий', avatarSource: require('../../assets/avatar3.jpg') },
  { id: 4, username: 'Алена', avatarSource: require('../../assets/avatar5.jpg') },
  { id: 5, username: 'Лев', avatarSource: require('../../assets/avatar7.jpg') },
  { id: 6, username: 'Алексей', avatarSource: require('../../assets/avatar6.jpg') },
];

const News = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Новости</Text>
        <View style={styles.headerIcons}>
          <Icon name="add-circle-outline" size={28} color="#000" />
          <Icon name="notifications-outline" size={28} color="#000" />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        {stories.map((story) => (
          <StoryItem key={story.id} username={story.username} avatarSource={story.avatarSource} />
        ))}
      </ScrollView>

      <PostItem
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="2 часа назад"
        text={'🎅 Рязань в новогоднем убранстве...'}
        images={['ryazan6.jpg', 'newyearroute.jpg']}
        numberOfViews={6355}
      />

      <PostItem
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="1 день назад"
        text={'🌳 3 крутых места Рязани...'}
        images={['ryazan1.jpg', 'ryazan2.jpg', 'ryazan3.jpg']}
        numberOfViews={8748}
      />

      <PostItem
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="1 день назад"
        text={'🌊 Продолжаем обзор красивых мест Рязани...'}
        images={['ryazan4.jpg', 'ryazan5.jpg']}
        numberOfViews="10 тыс."
      />
    </ScrollView>
  );
};

export default News;
