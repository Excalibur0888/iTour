import React, { useState, useEffect } from 'react';
import { StyleSheet, View, PermissionsAndroid, ActivityIndicator } from 'react-native';
import YaMap from 'react-native-yamap';
import Geolocation from '@react-native-community/geolocation';
import markerIcon from '../../assets/marker.png';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);

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
        },
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
        alert('Не удалось получить геопозицию');
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
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
      {currentLocation && (
        <YaMap
          style={styles.map}
          rotateGesturesEnabled={false}
          mapType={'vector'}
          showUser Position={true}
          initialRegion={{
            lat: currentLocation.latitude,
            lon: currentLocation.longitude,
            zoom: 7,
            azimuth: 0,
          }}
          userLocationIcon={markerIcon}
					userLocationIconScale={0.1}
        />
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;