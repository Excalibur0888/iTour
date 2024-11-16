import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, Animated, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { addToFavorites, removeFromFavorites } from '../../../redux/actions';
import { getImageDownloadURL } from '../firebaseStorageHelper';
import { handlePressIn, handlePressOut} from '../Animation/Animations';
import styles from './ContainersStyles';

const Block = ({ blockCaption, imageSource, rating }) => {
	const [selected, setSelected] = useState(false);
	const dispatch = useDispatch();

	const handleToggleFavorite = () => {
		const updatedSelected = !selected;
		setSelected(updatedSelected);

		if (updatedSelected) {
			dispatch(addToFavorites({ caption: blockCaption, image: imageSource, rating: rating }));
		} else {
			dispatch(removeFromFavorites({ caption: blockCaption }));
		}
	};

	const scaleValue = useRef(new Animated.Value(1)).current;

	return (
		<TouchableWithoutFeedback onPressIn={() => handlePressIn(scaleValue)} onPressOut={() => handlePressOut(scaleValue)}>
			<Animated.View
				style={[
					styles.block,
					{ transform: [{ scale: scaleValue }] },
				]}
			>
				<TouchableOpacity
					style={[
						styles.favoriteButton,
						selected && styles.favoriteButtonSelected,
					]}
					onPress={handleToggleFavorite}
				>
					<Icon
						name={selected ? 'heart' : 'heart-outline'}
						size={20}
						color={selected ? 'red' : 'black'}
					/>
				</TouchableOpacity>
				<Image source={imageSource} style={styles.image} lazy/>
				<View style={styles.captionContainer}>
					<Text style={styles.caption} numberOfLines={1}>{blockCaption}</Text>
				</View>
				<View style={styles.ratingContainer}>
					<Icon style={{marginRight: 5}} name="star" size={15} color="#D8D138"/><Text style={styles.rating} numberOfLines={1}>4.1</Text>
				</View>
			</Animated.View>
		</TouchableWithoutFeedback>
	);
};

const GridContainers = () => {
  const [imageURLs, setImageURLs] = useState([]);
  // useEffect(() => {
  //   const fetchImageURLs = async () => {
  //     const images = ['i7 12700KF, RTX 4070ti, 32GB, 2TB.png', 
	// 		'i5 12600K, RTX 3060ti, 16GB, 1,5TB.png', 
	// 		'i3 12100F, GTX 1660S, 16GB, 1,5TB.png', 
	// 		'i3 10100F, GTX 1650, 8GB, 1TB.png',
	// 		'R9 5900X, RTX 4070ti, 32GB, 2TB.png',
	// 		'R7 5700X, RTX 3070, 16GB, 2TB.png',
	// 		'R5 5500, RTX 2060, 16GB, 2TB.png', 
	// 		'R5 3600, GTX 1650, 8GB, 1TB.png'];

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
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			<View style={styles.row}>
				<Block
					key={imageURLs[0]?.imageName}
					blockCaption={`${imageURLs[0]?.imageName?.split('.')[0]}`}
					imageSource={{ uri: imageURLs[0]?.url }}
				/>
				<Block
					key={imageURLs[1]?.imageName}
					blockCaption={`${imageURLs[1]?.imageName?.split('.')[0]}`}
					imageSource={{ uri: imageURLs[1]?.url }}
				/>
				<Block
					key={imageURLs[2]?.imageName}
					blockCaption={`${imageURLs[2]?.imageName?.split('.')[0]}`}
					imageSource={{ uri: imageURLs[2]?.url }}
				/>
				<Block
					key={imageURLs[3]?.imageName}
					blockCaption={`${imageURLs[3]?.imageName?.split('.')[0]}`}
					imageSource={{ uri: imageURLs[3]?.url }}
				/>
			</View>
		</ScrollView>
  );
};

export default GridContainers;
