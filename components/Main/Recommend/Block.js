import React, { useRef } from "react";
import { Text, View, Animated, TouchableWithoutFeedback, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./RecStyles";

const Block = ({ imageSource, text }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: false,
    }).start();
  };

  const handleNavigateToDetails = () => {
    navigation.navigate("PlusStackScreen", {
      imageSource: imageSource,
      caption: text,
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handleNavigateToDetails}
    >
      <Animated.View
        style={[
          styles.block,
          {
            transform: [{ scale: scaleValue }],
          },
        ]}
      >
        <Image source={imageSource} style={styles.image} resizeMode="cover" />
        <View style={styles.dimensions}>
          <Text style={styles.dimensions__text}>4N/5D</Text>
        </View>
        <Text style={styles.caption}>{text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Block;
