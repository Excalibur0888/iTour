import React from 'react';
import YaMap, { Marker } from 'react-native-yamap';
import markerIcon from '../../assets/marker.png';
import userLocationIcon from '../../assets/userLocationIcon.png';
import styles from './styles';

const MapView = ({ currentLocation, searchLocation, mapRef, handleMapPress, removeMarker, nightmode }) => {
  return (
    <YaMap
      ref={mapRef}
			style={styles.map}
			nightMode={nightmode}
      rotateGesturesEnabled={false}
      userLocationIcon={userLocationIcon}
			userLocationIconScale={0.7}
      userLocationAccuracyFillColor='#d45f5f'
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
          onPress={removeMarker}
        />
      )}
    </YaMap>
  );
};

export default MapView;
