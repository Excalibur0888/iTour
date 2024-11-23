import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteButton = ({ selected, onToggle, style }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={[styles.button, style]}>
      <Icon
        name={selected ? 'heart' : 'heart-outline'}
        size={24}
        color={selected ? 'red' : 'gray'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default FavoriteButton;
