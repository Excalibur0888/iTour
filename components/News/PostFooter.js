import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const PostFooter = ({ numberOfViews }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);

  return (
    <View style={styles.postFooter}>
      <View style={styles.footerTop}>
        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Icon name={isLiked ? 'heart' : 'heart-outline'} size={24} color={isLiked ? '#FF0000' : '#666'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowCommentInput(!showCommentInput)}>
            <Icon
              name="chatbubble-outline"
              size={24}
              color="#666"
            />
          </TouchableOpacity>
          <Icon name="share-social-outline" size={24} color="#666" />
        </View>

        {/* Статистика */}
        <View style={styles.postStats}>
          <Icon name="heart" size={20} color="#666" />
          <Text style={styles.statsText}>{numberOfViews - 2200 || 7544}</Text>
          <Icon name="eye-outline" size={20} color="#666" />
          <Text style={styles.statsText}>{numberOfViews}</Text>
        </View>
      </View>

      {/* Поле ввода комментария */}
      {showCommentInput && (
        <View style={styles.commentInputContainer}>
          <TextInput
            style={styles.commentInput}
            placeholder="Оставить комментарий"
            placeholderTextColor="#aaa"
          />
        </View>
      )}
    </View>
  );
};

export default PostFooter;
