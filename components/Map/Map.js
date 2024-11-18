import React from 'react';
import {StyleSheet, View} from 'react-native';
import YaMap from 'react-native-yamap';

const Map = () => {
  return (
    <View style={styles.main}>
        <YaMap
          style={styles.map}
          showUserPosition={true}
					
        />
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