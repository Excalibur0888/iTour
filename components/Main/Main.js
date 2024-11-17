import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { gStyle } from '../../styles/style';
import GridContainers from './GridContainers/GridContainers';
import Categories from './Categories';
import Header from '../Header/Header';
import Search from './Search';
import Recommend from './Recommend/Recommend';

const Main = () => {
	return (
		<View style={styles.main}>
			<Header/>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<Text style={gStyle.subtitle}>Исследуйте</Text>
				<Text style={styles.main__title}>Рязань</Text>
				<Search/>
				<Categories />
				<Text style={gStyle.title}>Популярное</Text>
				<GridContainers />
				<Text style={gStyle.title}>Рекомендуем</Text>
				<Recommend/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		color: '#fff',
		backgroundColor: '#fff',
	},
	main__title: {
		fontSize: 32,
		fontFamily: 'Montserrat-Medium',
	},
	contentContainer: {
		paddingHorizontal: 15,
		paddingBottom: 50,
	},
});

export default Main;
