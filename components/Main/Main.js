import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { gStyle } from "../../styles/style";
import Categories from "./Categories";
import Header from "../Header/Header";
import Search from "./Search";
import LocationComponent from "./Pages/LocationComponent";
import HotelsComponent from "./Pages/HotelsComponent";
import FoodComponent from "./Pages/FoodComponent";
import ActivitiesComponent from './Pages/ActivitiesComponent';
import TransportComponent from './Pages/TransportComponent';

const Main = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1: // Локация
        return (
          <LocationComponent/>
        );
      case 2: // Отели
        return <HotelsComponent/>
      case 3: // Еда
        return <FoodComponent/>
      case 4: // Активности
        return <ActivitiesComponent/>
      case 5: // Транспорт
        return <TransportComponent/>
      default:
        return null;
    }
  };

  return (
    <View style={styles.main}>
      <Header />
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        <Text style={gStyle.subtitle}>Исследуйте</Text>
        <Text style={styles.main__title}>Рязань</Text>
        <Search />
        <Categories activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    color: "#fff",
    backgroundColor: "#fff",
  },
  main__titles__container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  main__title: {
    fontSize: 32,
    fontFamily: "Montserrat-Medium",
    color: "#000",
  },
  text__more: {
    color: "#176FF2",
  },
  contentContainer: {
    paddingHorizontal: 15,
    paddingBottom: 50,
  },
});

export default Main;
