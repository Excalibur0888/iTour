import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackButton from '../BackButton';
import { addToFavorites, removeFromFavorites } from '../../redux/actions';
import FavoriteButton from '../FavoriteButton';
import styles from './styles';

const SightScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const favorites = useSelector(state => state.favorites);
  const { caption, imageSource, rating } = route.params;

  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const isFavorite = favorites.some(item => item.caption === caption);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ caption }));
    } else {
      dispatch(
        addToFavorites({
          caption,
          image: imageSource,
          rating,
					category: "location",
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        {/* Блок изображения */}
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <FavoriteButton
            selected={isFavorite}
            onToggle={handleToggleFavorite}
            style={styles.heartButton}
          />
        </View>

        {/* Контент */}
        <View style={styles.content}>
          {/* Название */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>{caption}</Text>
          </View>

          {/* Рейтинг */}
          <View style={styles.ratingRow}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{rating} (355 Отзывов)</Text>
          </View>

          {/* Описание */}
          <View>
            <Text
              style={[styles.description, !expanded && styles.collapsedText]}
              numberOfLines={expanded ? null : 5}>
              Успенский собор Рязанского Кремля — православный храм в Рязани, летний кафедральный собор Рязанской епархии Русской православной церкви. Построен в Рязанском Кремле в 1693–1699 годах зодчим Яковом Григорьевичем Бухвостовым в стиле «нарышкинского барокко». Стилизованное изображение собора является одним из символов города.
            </Text>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={styles.readMoreButton}>
                {expanded ? 'Свернуть' : 'Подробнее'}
              </Text>
            </TouchableOpacity>
          </View>
					<TouchableOpacity
						style={[styles.bookButton, { alignSelf: 'flex-end' }]}>
						<Text
							style={
								styles.bookButtonText
							}>
							{'Маршрут'}
						</Text>
						<Icon
							name="arrow-forward"
							size={20}
							color={'#FFF'}
						/>
					</TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SightScreen;
