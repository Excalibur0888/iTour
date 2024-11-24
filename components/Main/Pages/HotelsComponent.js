import React, { useState, useEffect } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../redux/actions';
import FavoriteButton from '../../FavoriteButton';
import hotelData from '../../../assets/hotels.json';
import { getImageDownloadURL } from '../../firebaseStorageHelper';
import { gStyle } from '../../../styles/style';

const HotelsComponent = () => {
  const [hotels, setHotels] = useState([]);
  const [expanded, setExpanded] = useState(null);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const convenience = [
    { id: 1, icon: 'wifi' },
    { id: 2, icon: 'restaurant' },
    { id: 3, icon: 'bed' },
    { id: 4, icon: 'water' },
  ];

  useEffect(() => {
		const fetchHotelImages = async () => {
			const defaultImage = 'https://via.placeholder.com/200';
			const hotelPromises = hotelData.hotels.map(async (hotel) => {
				try {
					const imageURL = await getImageDownloadURL(hotel.image);
					return { ...hotel, imageURL };
				} catch (error) {
					console.warn(`Image for hotel "${hotel.name}" could not be loaded, using default`);
					return { ...hotel, imageURL: defaultImage };
				}
			});
			const hotelsWithImages = await Promise.all(hotelPromises);
			setHotels(hotelsWithImages);
		};
	
		fetchHotelImages();
	}, []);

  const handleToggleFavorite = (hotel) => {
		const isFavorite = favorites.some((item) => item.caption === hotel.name);
	
		if (!hotel.imageURL) {
			console.error(`Image URL for hotel "${hotel.name}" is not loaded`);
			return;
		}
	
		if (isFavorite) {
			dispatch(removeFromFavorites({ caption: hotel.name }));
		} else {
			dispatch(
				addToFavorites({
					caption: hotel.name,
					image: { uri: hotel.imageURL },
					rating: hotel.stars,
				})
			);
		}
	};

  const isHotelFavorite = (hotelName) => {
    return favorites.some((item) => item.caption === hotelName);
  };

  const hotelStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={24}
        color="#FFD700"
      />
    ));
  };

  const markPartner = (partner) => {
    return partner ? <Icon name="flame" size={32} color="#FF4500" /> : null;
  };

  const generateConveniences = (hotelId) => {
    const currentHotel = hotels.find((h) => h.id === hotelId);
    if (!currentHotel || !currentHotel.conveniences) return null;

    return currentHotel.conveniences.map((convenienceId) => {
      const conv = convenience.find((c) => c.id === convenienceId);
      if (!conv) return null;

      return (
        <View key={conv.id} style={styles.convenienceItem}>
          <Icon
            name={conv.icon}
            style={[styles.convenienceIcon, styles.iconShadow]}
            color="#b8b8b8"
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={gStyle.title}>Отели</Text>
        {hotels.map((hotel) => (
          <View key={hotel.id} style={styles.hotelContainer}>
            <View style={styles.partnerContainer}>{markPartner(hotel.partner)}</View>
            <FavoriteButton
              selected={isHotelFavorite(hotel.name)}
              onToggle={() => handleToggleFavorite(hotel)}
              style={[styles.heartButton, styles.iconShadow]}
            />
            <View style={styles.convenienceContainer}>
              {generateConveniences(hotel.id)}
            </View>
            <View style={styles.hotelImage}>
              <Image source={{ uri: hotel.imageURL }} style={styles.image} />
            </View>
            <View style={styles.hotelContentContainer}>
              <View style={styles.hotelNameContainer}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <View style={{ flexDirection: 'row' }}>{hotelStars(hotel.stars)}</View>
              </View>
              <View>
                <Text
                  numberOfLines={expanded === hotel.id ? undefined : 2}
                  style={styles.hotelCaption}
                >
                  {hotel.caption}
                </Text>
                <TouchableOpacity
                  onPress={() => setExpanded(expanded === hotel.id ? null : hotel.id)}
                >
                  <Text style={styles.readMore}>
                    {expanded === hotel.id ? 'Скрыть' : 'Подробнее'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.hotelPriceContainer}>
                <Text style={styles.hotelPrice}>{hotel.price}₽/сут.</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.buttonBook, styles.glowingButton]}
                  >
                    <Text style={styles.buttonTextBook}>Забронировать</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buttonMap, styles.glowingButton]}
                  >
                    <Text style={styles.buttonTextMap}>На карте</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 60,
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 24,
    marginBottom: 10,
  },
  hotelContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    flexDirection: 'column',
    marginBottom: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  hotelNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  hotelName: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  partnerContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 100,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  hotelCaption: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    marginBottom: 10,
    fontSize: 14,
  },
  hotelContentContainer: {
    padding: 10,
  },
  readMore: {
    fontFamily: 'Montserrat-Regular',
    color: '#4169E1',
    fontSize: 16,
    marginBottom: 10,
  },
  hotelPrice: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#78d5a8',
    fontSize: 16,
  },
  hotelPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonBook: {
    backgroundColor: '#4169E1',
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  buttonTextBook: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    fontSize: 12,
  },
  buttonMap: {
    borderWidth: 1,
    borderColor: '#111',
    padding: 10,
    borderRadius: 10,
  },
  buttonTextMap: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#4169E1',
    fontSize: 12,
  },
  heartButton: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 10,
    position: 'absolute',
    zIndex: 100,
    top: 10,
    right: 5,
  },
  convenienceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    right: 5,
    zIndex: 100,
  },
  convenienceItem: {
    marginRight: 5,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  convenienceIcon: {
    fontSize: 28,
  },
  glowingButton: {
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  iconShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default HotelsComponent;
