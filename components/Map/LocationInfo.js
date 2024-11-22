import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LocationInfo = ({markerCoordinates}) => {
  if (!markerCoordinates) return null;

  return (
    <View style={styles.infoBox}>
      <View>
        <Text style={styles.infoText}>Координаты метки:</Text>
        <Text style={styles.infoText}>
          Широта: {markerCoordinates.latitude.toFixed(6)}
        </Text>
        <Text style={styles.infoText}>
          Долгота: {markerCoordinates.longitude.toFixed(6)}
        </Text>
      </View>
      <TouchableOpacity style={styles.routeButton}>
        <Text style={styles.routeButtonText}>Маршрут</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationInfo;
