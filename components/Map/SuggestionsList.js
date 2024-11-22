import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { handleSuggestionPress } from './utils';
import styles from './styles';

const SuggestionsList = ({ suggestions, setSearchLocation, setSuggestions, mapRef }) => {
  return (
    <FlatList
      style={styles.suggestionsList}
      data={suggestions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.suggestionItem}
          onPress={() => handleSuggestionPress(item, setSearchLocation, setSuggestions, mapRef)}
        >
          <Text style={styles.suggestionTitle}>{item.title}</Text>
          <Text style={styles.suggestionSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default SuggestionsList;
