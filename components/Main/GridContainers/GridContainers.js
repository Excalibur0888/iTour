import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Block from './Block';
import { getImageDownloadURL } from '../../firebaseStorageHelper';
import styles from './ContainersStyles';

const GridContainers = () => {
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = [
        'Успенский собор.webp',
        'Спасо-Преображенский храм.webp',
        'Памятник Есенину.webp',
        'Театр драмы.webp',
      ];

      try {
        // Попытка загрузить из кэша
        const cachedImages = await AsyncStorage.getItem('cachedImages');
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
        await AsyncStorage.setItem('cachedImages', JSON.stringify(urls));
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };

    fetchImageURLs();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>
        {imageURLs.map((image, index) => (
          <Block
            key={image.imageName}
            blockCaption={`${image.imageName.split('.')[0] || ''}`}
            imageSource={{ uri: image.url }}
            rating={(4.5 + index * 0.1).toFixed(1)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default GridContainers;
