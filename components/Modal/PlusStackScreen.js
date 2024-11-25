import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../BackButton';
import {addToFavorites, removeFromFavorites} from '../../redux/actions';
import FavoriteButton from '../FavoriteButton';
import styles from './styles';

const PlusStackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const favorites = useSelector(state => state.favorites);
  const {caption, imageSource, rating, price, conveniences, description} =
    route.params;

  const conveniencesList = [
    {id: 1, icon: 'wifi', text: 'WiFi'},
    {id: 2, icon: 'restaurant', text: 'Питание'},
    {id: 3, icon: 'bed', text: 'Отель'},
    {id: 4, icon: 'water', text: 'Бассейн'},
  ];

  const [expanded, setExpanded] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const dispatch = useDispatch();

  const isFavorite = favorites.some(item => item.caption === caption);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({caption}));
    } else {
      dispatch(
        addToFavorites({
          caption,
          image: imageSource,
          rating,
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <FavoriteButton
            selected={isFavorite}
            onToggle={handleToggleFavorite}
            style={styles.heartButton}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{caption}</Text>
            <TouchableOpacity>
              <Text style={styles.mapLink}>Карта</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ratingRow}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{rating} (355 Отзывов)</Text>
          </View>

          <View>
            <Text
              style={[styles.description, !expanded && styles.collapsedText]}
              numberOfLines={expanded ? null : 5}>
              {description}
            </Text>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={styles.readMoreButton}>
                {expanded ? 'Свернуть' : 'Подробнее'}
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.conveniencesTitle}>Удобства</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.conveniences}>
            {conveniences.map((id, index) => {
              const convenienceItem = conveniencesList.find(c => c.id === id);
              if (!convenienceItem) return null;

              return (
                <View key={index} style={styles.convenienceItem}>
                  <Icon
                    name={convenienceItem.icon}
                    style={styles.convenienceIcon}
                  />
									<Text style={styles.convenienceText}>{convenienceItem.text}</Text>
                </View>
              );
            })}
          </ScrollView>

          <View style={styles.footer}>
            <View>
              <Text style={styles.labelPrice}>Цена</Text>
              <Text style={styles.price}>{price}₽/сут</Text>
            </View>
            <TouchableOpacity
              onPress={() => setIsBooked(!isBooked)}
              style={isBooked ? styles.cancelButton : styles.bookButton}>
              <Text
                style={
                  isBooked ? styles.cancelButtonText : styles.bookButtonText
                }>
                {isBooked ? 'Отменить' : 'Забронировать'}
              </Text>
							<Icon
								name="arrow-forward"
								size={20}
								color={isBooked ? '#4169E1' : '#FFF'}
							/>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



export default PlusStackScreen;
