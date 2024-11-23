import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { gStyle } from "../../styles/style";
import GridContainers from "./GridContainers/GridContainers";
import Categories from "./Categories";
import Header from "../Header/Header";
import Search from "./Search";
import Recommend from "./Recommend/Recommend";

const Main = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1: // Локация
        return (
          <>
						<Text style={gStyle.title}>Популярное</Text>
            <GridContainers />
            <Text style={gStyle.title}>Рекомендуем</Text>
            <Recommend />
          </>
        );
      case 2: // Отели
        return <Text style={gStyle.title}>Список отелей</Text>;
      case 3: // Еда
        return <Text style={gStyle.title}>Список ресторанов</Text>;
      case 4: // Активности
        return <Text style={gStyle.title}>Список активностей</Text>;
      case 5: // Транспорт
        return <Text style={gStyle.title}>Варианты транспорта</Text>;
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
