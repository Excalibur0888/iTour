// components/StoryItem.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const StoryItem = ({ username, avatarSource }) => {
  return (
    <View style={styles.storyItem}>
      <Image style={styles.storyAvatar} source={avatarSource} />
      <Text style={styles.storyUsername}>{username}</Text>
    </View>
  );
};

export default StoryItem;
