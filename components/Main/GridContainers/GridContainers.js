import React, {useState, useEffect} from 'react';
import { View, ScrollView,} from 'react-native';
import Block from './Block';
import {getImageDownloadURL} from '../../firebaseStorageHelper';
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

      const urls = await Promise.all(
        images.map(async imageName => {
          const url = await getImageDownloadURL(imageName);
          return {imageName, url};
        }),
      );

      setImageURLs(urls);
    };

    fetchImageURLs();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.row}>
        <Block
          key={imageURLs[0]?.imageName}
          blockCaption={`${imageURLs[0]?.imageName?.split('.')[0] || ''}`}
          imageSource={{uri: imageURLs[0]?.url}}
					rating="4.8"
        />
        <Block
          key={imageURLs[1]?.imageName}
          blockCaption={`${imageURLs[1]?.imageName?.split('.')[0] || ''}`}
          imageSource={{uri: imageURLs[1]?.url}}
					rating="4.5"
        />
        <Block
          key={imageURLs[2]?.imageName}
          blockCaption={`${imageURLs[2]?.imageName?.split('.')[0] || ''}`}
          imageSource={{uri: imageURLs[2]?.url}}
					rating="4.1"
        />
        <Block
          key={imageURLs[3]?.imageName}
          blockCaption={`${imageURLs[3]?.imageName?.split('.')[0] || ''}`}
          imageSource={{uri: imageURLs[3]?.url}}
					rating="4.9"
        />
      </View>
    </ScrollView>
  );
};

export default GridContainers;
