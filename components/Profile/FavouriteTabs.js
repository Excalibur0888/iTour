import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const FavouriteTabs = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 1, label: 'Локации' },
    { id: 2, label: 'Отели' },
    { id: 3, label: 'Еда' },
    { id: 4, label: 'Активности' },
    { id: 5, label: 'Транспорт' },
  ];

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
              styles.tab,
              activeTab === item.id && styles.activeTab,
            ]}
            onPress={() => setActiveTab(item.id)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === item.id && styles.activeTabText,
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
    marginVertical: 10,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tab: {
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  activeTab: {
    backgroundColor: '#176FF2',
    shadowColor: '#176FF2',
    shadowOpacity: 0.5,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default FavouriteTabs;
