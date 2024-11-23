import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { getImageDownloadURL } from "../firebaseStorageHelper";
import styles from "./RecStyles";
import Block from "./Block";

const Recommend = () => {
	const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    const fetchImageURLs = async () => {
      const images = [
				'Древний город Рязань.webp',
				'Памятник Коловрату.webp',
				'Рязанский кремль.webp',
			];

      const urls = await Promise.all(
        images.map(async (imageName) => {
          const url = await getImageDownloadURL(imageName);
          return { imageName, url };
        })
      );

      setImageURLs(urls);
    };

    fetchImageURLs();
  }, []);

	return (
		<View style={styles.row}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Block imageSource={{ uri: imageURLs[0]?.url }} text={`${imageURLs[0]?.imageName?.split('.')[0] || ''}`}/>
				<Block imageSource={{ uri: imageURLs[1]?.url }} text={`${imageURLs[1]?.imageName?.split('.')[0] || ''}`}/>
				<Block imageSource={{ uri: imageURLs[2]?.url }} text={`${imageURLs[2]?.imageName?.split('.')[0] || ''}`}/>
			</ScrollView>
		</View>
	);
};

export default Recommend;