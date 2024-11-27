import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from 'react-native';
import { addToFavorites, removeFromFavorites } from '../../../redux/actions';
import { handlePressIn, handlePressOut } from '../Animation/Animations';
import FavoriteButton from '../../FavoriteButton';
import styles from './ContainersStyles';

const Block = ({ blockCaption, imageSource, rating }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const scaleValue = useRef(new Animated.Value(1)).current;

  // Получаем глобальное состояние избранного
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.some((item) => item.caption === blockCaption);

  // Обработчик для переключения избранного
  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ caption: blockCaption }));
    } else {
      dispatch(
        addToFavorites({
          caption: blockCaption,
          image: imageSource,
          rating: rating,
					category: "location",
        })
      );
    }
  };

  // Навигация к детальной информации
  const handleNavigateToDetails = () => {
    navigation.navigate('SightScreen', {
      caption: blockCaption,
      imageSource: imageSource,
      rating: rating,
			category: "location",
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => handlePressIn(scaleValue)}
      onPressOut={() => handlePressOut(scaleValue)}
      onPress={handleNavigateToDetails}
    >
      <Animated.View style={[styles.block, { transform: [{ scale: scaleValue }] }]}>
        <FavoriteButton
          selected={isFavorite}
          onToggle={handleToggleFavorite}
          style={[
            styles.favoriteButton,
            isFavorite && styles.favoriteButtonSelected,
          ]}
        />
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.captionContainer}>
          <Text style={styles.caption} numberOfLines={1}>
            {blockCaption}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Icon
            style={{ marginRight: 5 }}
            name="star"
            size={15}
            color="#D8D138"
          />
          <Text style={styles.rating} numberOfLines={1}>
            {rating}
          </Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Block;
