import React from 'react';
import { TextInput, View } from 'react-native';
import { fetchSuggestions } from './utils';
import styles from './styles';

const SearchInput = ({ searchText, setSearchText, setSuggestions }) => {
  const handleChangeText = (text) => {
    setSearchText(text);
    fetchSuggestions(text, setSuggestions);
  };

  return (
    <View style={styles.searchInput}>
      <TextInput
        placeholder="Введите адрес или место"
        value={searchText}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default SearchInput;
