import React, { useRef, useState, useEffect } from "react";
import { Text, View, ScrollView, Animated, TouchableWithoutFeedback, Image } from "react-native";
import { gStyle } from "../../../styles/style";
import { getImageDownloadURL } from "./firebaseStorageHelper";
import styles from "./RecStyles";

const Block = ({ imageSource, text }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.block,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <View style={styles.imageWrapper}>
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
          />
            <Text style={styles.caption}>{text}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Recommend = () => {
	const [imageURLs, setImageURLs] = useState([]);
  // useEffect(() => {
  //   const fetchImageURLs = async () => {
  //     const images = ['gaming.jpg', 'office.jpg', 'budget.jpg'];

  //     const urls = await Promise.all(
  //       images.map(async (imageName) => {
  //         const url = await getImageDownloadURL(imageName);
  //         return { imageName, url };
  //       })
  //     );

  //     setImageURLs(urls);
  //   };

  //   fetchImageURLs();
  // }, []);

	return (
		<View style={styles.row}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<Block imageSource={{ uri: imageURLs[0]?.url }} text='Игровые'/>
				<Block imageSource={{ uri: imageURLs[1]?.url }} text='Офисные'/>
				<Block imageSource={{ uri: imageURLs[2]?.url }} text='Бюджетные'/>
			</ScrollView>
			
		</View>
	);
};

export default Recommend;