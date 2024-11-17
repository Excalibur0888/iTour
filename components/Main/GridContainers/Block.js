import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './ContainersStyles';
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Animated, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {addToFavorites, removeFromFavorites} from '../../../redux/actions';
import {handlePressIn, handlePressOut} from '../Animation/Animations';

const Block = ({ blockCaption, imageSource, rating }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleToggleFavorite = () => {
    const updatedSelected = !selected;
    setSelected(updatedSelected);

    if (updatedSelected) {
      dispatch(
        addToFavorites({
          caption: blockCaption,
          image: imageSource,
          rating: rating,
        }),
      );
    } else {
      dispatch(removeFromFavorites({ caption: blockCaption }));
    }
  };

  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleNavigateToDetails = () => {
    navigation.navigate('PlusStackScreen', {
      caption: blockCaption,
      image: imageSource,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => handlePressIn(scaleValue)}
      onPressOut={() => handlePressOut(scaleValue)}
      onPress={handleNavigateToDetails}
    >
      <Animated.View style={[styles.block, { transform: [{ scale: scaleValue }] }]}>
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
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="cover"
          lazy
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