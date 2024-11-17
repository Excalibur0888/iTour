import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../../styles/style';
import Header from '../Header/Header';
import Favourite from './Favourite';

const Profile = () => {
	return (
		<View style={gStyle.main}>
			<Header/>
			<Favourite/>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Profile;
