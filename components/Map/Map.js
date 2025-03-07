import React, { useState, useEffect, useRef } from 'react';
import { View, ActivityIndicator, TouchableHighlight } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';
import SearchInput from './SearchInput';
import Icon from 'react-native-vector-icons/Ionicons';
import SuggestionsList from './SuggestionsList';
import LocationInfo from './LocationInfo';
import MapView from './MapView';
import styles from './styles';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchLocation, setSearchLocation] = useState(null);
  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const [nightmode, setNightmode] = useState(false);  // Добавляем состояние для ночного режима
  const mapRef = useRef(null);

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
        console.warn(error);
        setTimeout(getCurrentLocation, 1);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const handleMapPress = (event) => {
    const { lat, lon } = event.nativeEvent;
    setMarkerCoordinates({ latitude: lat, longitude: lon });
    setSearchLocation({ latitude: lat, longitude: lon });
  };

  const removeMarker = () => {
    setMarkerCoordinates(null);
    setSearchLocation(null);
  };

  const handleNightmodeChange = () => {
    setNightmode((prev) => !prev); // Переключаем ночной режим
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
      <SearchInput
        searchText={searchText}
        setSearchText={setSearchText}
        setSuggestions={setSuggestions}
      />
      <TouchableHighlight
        style={[styles.nightmode, nightmode && styles.nightmodeActive]}
        onPress={handleNightmodeChange}
      >
        <Icon name="moon" size={25} color={nightmode ? "#1E90FF" : "#606060"} />
      </TouchableHighlight>
      <SuggestionsList
        suggestions={suggestions}
        setSearchLocation={setSearchLocation}
        setSuggestions={setSuggestions}
        mapRef={mapRef}
      />
      <MapView
        currentLocation={currentLocation}
        searchLocation={searchLocation}
        mapRef={mapRef}
        handleMapPress={handleMapPress}
        removeMarker={removeMarker}
        nightmode={nightmode}
      />
      <LocationInfo markerCoordinates={markerCoordinates} />
    </View>
  );
};

export default Map;
