import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { gStyle } from '../../styles/style';

const Header = () => {
  return (
		<TouchableOpacity style={styles.header__location}>
			<Icon style={{ marginRight: 5 }} name="location" size={20} color="#176FF2" />
			<Text style={gStyle.text}>Рязань, Россия</Text>
			<Icon name="chevron-down" size={20} color="#176FF2" />
		</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	header__location: {
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		width: 'auto',
		marginTop: 20,
		marginRight: 10,
	},
});

export default Header;
