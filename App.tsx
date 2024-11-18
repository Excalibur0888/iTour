import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './redux/reducers';
import NavigateTab from './Navigation/NavigateTab';
import YaMap from 'react-native-yamap';
import { Geocoder } from 'react-native-yamap';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

function App(): React.JSX.Element {
	YaMap.init('97acf61a-31fe-4fa0-a71b-1b93b2055b77');
	Geocoder.init('6a6fef2d-6fbd-413f-9c3f-94a14072bf33');

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <NavigateTab />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashText: {
    color: '#000',
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
		color: '#000',
		backgroundColor: '#fff'
  },
});

export default App;
