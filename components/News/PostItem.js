// components/PostItem.js
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getImageDownloadURL } from '../firebaseStorageHelper';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostImages from './PostImages';
import styles from './styles';

const PostItem = ({ userAvatar, userName, timeAgo, text, images, numberOfViews }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await Promise.all(
          images.map(async (imageName) => {
            const url = await getImageDownloadURL(imageName);
            return url;
          })
        );
        setImageURLs(urls);
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };

    fetchImages();
  }, [images]);

  const paragraphs = text.split('\n\n');

  return (
    <View style={styles.post}>
      <PostHeader userAvatar={userAvatar} userName={userName} timeAgo={timeAgo} />

      {text.length > 200 ? (
        <>
          <Text numberOfLines={showFullText ? null : 5} style={styles.postText}>
            {text}
          </Text>
          <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
            <Text style={[styles.postText, { color: '#4169E1', marginTop: 2 }]}>
              {showFullText ? 'Скрыть' : 'Показать больше'}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.paragraphsContainer}>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} style={styles.postText}>
              {paragraph}
            </Text>
          ))}
        </View>
      )}

      <PostImages imageURLs={imageURLs} />
      <PostFooter numberOfViews={numberOfViews} />
    </View>
  );
};

export default PostItem;
