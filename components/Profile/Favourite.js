import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { gStyle } from '../../styles/style';
import BackButton from '../BackButton';
import FavouriteTabs from './FavouriteTabs';

const Favourite = () => {
  const [activeTab, setActiveTab] = useState(1);
  const favorites = useSelector((state) => state.favorites);

  const categoryMapping = {
    1: 'location',
    2: 'hotels',
    3: 'food',
    4: 'activities',
    5: 'transport',
  };

  const filteredFavorites = favorites.filter(
    (item) => item.category === categoryMapping[activeTab]
  );

  return (
    <View style={gStyle.main}>
      <BackButton />
			<Text style={[gStyle.mainTitle, styles.favouriteTitle]}>Избранное</Text>
      <FavouriteTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.gridContainer}>
          {filteredFavorites.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.caption}>{item.caption}</Text>
              <Text style={styles.rating}>Рейтинг: {item.rating}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
	favouriteTitle: {
		alignSelf: 'flex-end',
		margin: 20,
		marginBottom: 0,
		marginLeft: 0,
	},
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#000',
  },
  rating: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
  },
});

export default Favourite;
