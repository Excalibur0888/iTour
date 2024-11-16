import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View style={styles.search__container}>
      <Icon style={styles.search__icon} name="search-outline" size={25} color="#B8B8B8" />
      <TextInput 
        style={styles.search__input}
        placeholder="Искать маршрут"
        onChangeText={(text) => console.log(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search__container: {
    position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#F3F8FE',
		borderRadius: 25,
		marginTop: 15,
  },
  search__input: {
    height: 60,
		paddingHorizontal: 20,
  },
  search__icon: {
		left: 10,
    zIndex: 2,
  },
});

export default Search;