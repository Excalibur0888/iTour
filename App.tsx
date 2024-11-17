import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './redux/reducers';
import NavigateTab from './Navigation/NavigateTab';
import YaMap from 'react-native-yamap';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

function App(): React.JSX.Element {
	YaMap.init('97acf61a-31fe-4fa0-a71b-1b93b2055b77');
	
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#1e1e1e"/>
        <NavigateTab />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    color: '#fff',
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
		color: '#fff',
  },
});

export default App;
