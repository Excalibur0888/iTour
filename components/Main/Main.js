import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {gStyle} from '../../styles/style';
import GridContainers from './GridContainers/GridContainers';
import Categories from './Categories';
import Header from '../Header/Header';
import Search from './Search';
import Recommend from './Recommend/Recommend';

const Main = () => {
  return (
    <View style={styles.main}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={gStyle.subtitle}>Исследуйте</Text>
        <Text style={styles.main__title}>Рязань</Text>
        <Search />
        <Categories />
        <View style={styles.main__titles__container}>
          <Text style={gStyle.title}>Популярное</Text>
          <TouchableOpacity><Text style={styles.text__more}>Все</Text></TouchableOpacity>
        </View>
        <GridContainers />
        <Text style={gStyle.title}>Рекомендуем</Text>
        <Recommend />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    color: '#fff',
    backgroundColor: '#fff',
  },
	main__titles__container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
  main__title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Medium',
		color: '#000'
  },
	text__more: {
		color: '#176FF2',
	},
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
});

export default Main;
