import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getImageDownloadURL } from '../../firebaseStorageHelper';
import styles from './RecStyles';
import Block from './Block';

const Recommend = () => {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = [
        'Древний город Рязань.webp',
        'Памятник Коловрату.webp',
        'Рязанский кремль.webp',
      ];

      try {
        // Попытка загрузить из кэша
        const cachedImages = await AsyncStorage.getItem('cachedRecommendImages');
        if (cachedImages) {
          setImageURLs(JSON.parse(cachedImages));
          return;
        }

        // Если нет данных в кэше, загружаем с сервера
        const urls = await Promise.all(
          images.map(async (imageName) => {
            const url = await getImageDownloadURL(imageName);
            return { imageName, url };
          })
        );

        setImageURLs(urls);

        // Сохраняем в локальный кэш
        await AsyncStorage.setItem('cachedRecommendImages', JSON.stringify(urls));
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };

    fetchImageURLs();
  }, []);

  return (
    <View style={styles.row}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {imageURLs.map((image, index) => (
          <Block
            key={image.imageName}
            imageSource={{ uri: image.url }}
            text={`${image.imageName.split('.')[0] || ''}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Recommend;
