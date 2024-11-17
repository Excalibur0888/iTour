import React, {useEffect, useState} from 'react';
import {StyleSheet, View, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import YaMap from 'react-native-yamap';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Разрешение на доступ к местоположению',
            message: 'Приложению требуется доступ к вашему местоположению для отображения карты.',
            buttonNeutral: 'Спросить позже',
            buttonNegative: 'Отмена',
            buttonPositive: 'ОК',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getUserLocation();
        } else {
          console.log('Доступ к местоположению отклонен');
        }
      } else {
        getUserLocation();
      }
    };

    const getUserLocation = () => {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
        },
        error => console.log(error),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    requestLocationPermission();
  }, []);

  return (
    <View style={styles.main}>
      {userLocation && (
        <YaMap
          style={styles.map}
          showUserPosition={true}
          initialRegion={{
            lat: userLocation.latitude,
            lon: userLocation.longitude,
            zoom: 15,
          }}
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
});

export default Map;
