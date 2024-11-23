import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import { gStyle } from '../../styles/style';

const Favourite = () => {
	const navigation = useNavigation();
  const favorites = useSelector((state) => state.favorites);
	const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={gStyle.main}>
			<TouchableOpacity onPress={handleGoBack}>
          <Icon name='chevron-back-outline' size={50} color="black" />
        </TouchableOpacity>
      <ScrollView>
        {favorites.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.caption}>{item.caption}</Text>
						<Text style={styles.caption}>{item.rating}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
		color: '#000',
  },
});

export default Favourite;
