import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";

const PlusStackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { caption, image } = route.params;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.stack__screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name='chevron-back-outline' size={50} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stack__screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  caption: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlusStackScreen;
