// components/PostHeader.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const PostHeader = ({ userAvatar, userName, timeAgo }) => {
  return (
    <View style={styles.postHeader}>
      <View style={styles.userInfo}>
        <Image style={styles.avatar} source={userAvatar} />
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.timeAgo}>{timeAgo}</Text>
        </View>
      </View>
      <Icon name="ellipsis-horizontal" size={20} color="#666" />
    </View>
  );
};

export default PostHeader;
