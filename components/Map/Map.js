import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  PermissionsAndroid,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import YaMap, { Marker, Suggest, Geocoder } from 'react-native-yamap';
import Geolocation from '@react-native-community/geolocation';
import markerIcon from '../../assets/marker.png';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [searchLocation, setSearchLocation] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'iTour Location Permission',
          message: 'iTour needs access to your Location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
        setLoading(false);
      },
      (error) => {
        setTimeout(getCurrentLocation, 1);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Поиск подсказок по мере ввода текста
  const fetchSuggestions = async (text) => {
    setSearchText(text);
    if (!text.trim()) {
      setSuggestions([]);
      return;
    }

    try {
      const suggestionsList = await Suggest.suggestWithCoords(text);
      setSuggestions(suggestionsList);
    } catch (error) {
      console.error('Ошибка при поиске подсказок:', error);
      setSuggestions([]);
    }
  };

  // Получение координат через Geocoder
  const getCoordinates = async (address) => {
    try {
      const geoData = await Geocoder.addressToGeo(address);

      if (geoData && geoData.lat && geoData.lon) {
				console.log(geoData.lat, geoData.lon);
				
        return {
          latitude: geoData.lat,
          longitude: geoData.lon,
        };
      }
    } catch (error) {
      console.error('Ошибка при геокодировании:', error);
    }
    return null;
  };

  // Обработка выбора подсказки
  const handleSuggestionPress = async (suggestion) => {
    const { title } = suggestion;
    const location = await getCoordinates(title);

    if (location) {
      setSearchLocation(location);
      setSuggestions([]);
      setSearchText(title);
    } else {
      alert('Не удалось установить координаты для подсказки.');
    }
  };

  // Поиск по тексту (при нажатии Enter)
  const handleSearch = async () => {
    if (!searchText.trim()) return;

    const location = await getCoordinates(searchText);

    if (location) {
      setSearchLocation(location);
      setSuggestions([]); // Скрываем подсказки, если есть
    } else {
      alert('Местоположение не найдено.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <TextInput
        style={styles.searchInput}
        placeholder="Введите адрес или место"
        value={searchText}
        onChangeText={fetchSuggestions}
        onSubmitEditing={handleSearch}
      />

      {suggestions.length > 0 && (
        <FlatList
          style={styles.suggestionsList}
          data={suggestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.suggestionItem}
              onPress={() => handleSuggestionPress(item)}
            >
              <Text style={styles.suggestionTitle}>{item.title}</Text>
              <Text style={styles.suggestionSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {currentLocation && (
        <YaMap
          style={styles.map}
          rotateGesturesEnabled={false}
          mapType={'vector'}
          initialRegion={{
            lat: currentLocation.latitude,
            lon: currentLocation.longitude,
            zoom: 10,
            azimuth: 0,
          }}
        >
          {searchLocation && (
            <Marker
              point={{
                lat: searchLocation.latitude,
                lon: searchLocation.longitude,
              }}
              source={markerIcon}
              scale={0.2}
            />
          )}
        </YaMap>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchInput: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    zIndex: 1,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  suggestionsList: {
    position: 'absolute',
    top: 60,
    left: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    maxHeight: 200,
    zIndex: 2,
    elevation: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  suggestionTitle: {
    fontWeight: 'bold',
  },
  suggestionSubtitle: {
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
