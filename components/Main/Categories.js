import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { gStyle } from "../../styles/style";

const Categories = () => {
  const menuItems = [
    { id: 1, label: "Локация" },
    { id: 2, label: "Отели" },
    { id: 3, label: "Еда" },
    { id: 4, label: "Активности" },
    { id: 5, label: "Транспорт" },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (id) => {
    setActiveTab(id);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              activeTab === item.id && styles.activeMenuItem,
            ]}
            onPress={() => handleTabPress(item.id)}
          >
            <Text
              style={[
                gStyle.text,
                activeTab === item.id && styles.activeText,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  menuItem: {
    marginRight: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  activeMenuItem: {
    backgroundColor: "#F3F8FE",
  },
  activeText: {
    color: "#176FF2",
  },
});

export default Categories;
