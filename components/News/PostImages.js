// components/PostImages.js
import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const PostImages = ({ imageURLs }) => {
  return (
    <View style={styles.postImages}>
      {imageURLs.length > 2 ? (
        <>
          <Image style={styles.fullWidthImage} source={{ uri: imageURLs[0] }} />
          <View style={styles.halfImagesContainer}>
            <Image style={styles.halfImage} source={{ uri: imageURLs[1] }} />
            <Image style={styles.halfImage} source={{ uri: imageURLs[2] }} />
          </View>
        </>
      ) : imageURLs.length === 2 ? (
        <View style={[styles.halfImagesContainer, { height: 300 }]}>
          <Image style={[styles.halfImage, { height: 300 }]} source={{ uri: imageURLs[0] }} />
          <Image style={[styles.halfImage, { height: 300 }]} source={{ uri: imageURLs[1] }} />
        </View>
      ) : (
        <Image style={[styles.fullWidthImage, { height: 300 }]} source={{ uri: imageURLs[0] }} />
      )}
    </View>
  );
};

export default PostImages;
