import React from 'react';
import YaMap, { Marker } from 'react-native-yamap';
import markerIcon from '../../assets/marker.png';
import styles from './styles';

const MapView = ({ currentLocation, searchLocation, mapRef, handleMapPress }) => {
  return (
    <YaMap
      ref={mapRef}
      style={styles.map}
      rotateGesturesEnabled={false}
      mapType={'vector'}
      initialRegion={{
        lat: currentLocation.latitude,
        lon: currentLocation.longitude,
        zoom: 10,
        azimuth: 0,
      }}
      onMapPress={handleMapPress}
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
  );
};

export default MapView;
