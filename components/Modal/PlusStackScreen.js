import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
          <View style={styles.conveniences}>
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
          </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 300,
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 20,
  },
  heartButton: {
    position: 'absolute',
    top: 280,
    right: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#000',
  },
  mapLink: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#4169E1',
    fontSize: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
    color: '#000',
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    lineHeight: 20,
    marginBottom: 20,
  },
  conveniencesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 22,
    marginBottom: 15,
  },
  conveniences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  convenienceItem: {
    alignItems: 'center',
    backgroundColor: '#f0f3fb',
    padding: 12,
    borderRadius: 10,
    width: '22%',
  },
  convenienceText: {
    marginTop: 5,
    color: '#b8b8b8',
    fontSize: 12,
  },
  convenienceIcon: {
    color: '#b8b8b8',
    fontSize: 32,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#78d5a8',
  },
  labelPrice: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  bookButton: {
    width: '62%',
    backgroundColor: '#4169E1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  bookButtonText: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
  cancelButton: {
    width: '62%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButtonText: {
    fontFamily: 'Montserrat-Regular',
    color: '#4169E1',
    marginRight: 10,
    fontSize: 16,
  },
  readMoreButton: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#4169E1',
    fontSize: 16,
    marginBottom: 25,
  },
});

export default PlusStackScreen;
