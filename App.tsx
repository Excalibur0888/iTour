import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './redux/reducers';
import NavigateTab from './Navigation/NavigateTab';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" />
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
    backgroundColor: '#111112',
  },
  splashText: {
    color: 'white',
    fontSize: 24,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#111112',
  },
});

export default App;
