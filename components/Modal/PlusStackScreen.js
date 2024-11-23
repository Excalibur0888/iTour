import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import BackButton from "../BackButton";

const PlusStackScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { caption, image } = route.params;
  const [expanded, setExpanded] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const conveniences = [
    { icon: 'wifi', text: 'Wi-Fi' },
    { icon: 'restaurant', text: 'Питание' },
    { icon: 'bed', text: 'Отель' },
    { icon: 'water', text: 'Бассейн' },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}/>
          <BackButton onPress={handleGoBack} />
          
          <TouchableOpacity 
            style={styles.heartButton}
            onPress={() => setIsLiked(!isLiked)}>
            <Icon 
              name={isLiked ? "heart" : "heart-outline"} 
              size={24} 
              color="#FF0000" 
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{caption}</Text>
            <TouchableOpacity>
              <Text style={styles.mapLink}>Карта</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.ratingRow}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>4.5 (355 Отзывов)</Text>
          </View>

          <View>
            <Text style={[styles.description, !expanded && styles.collapsedText]} numberOfLines={expanded ? null : 5}>
              Успенский собор в Рязани - один из древнейших православных храмов России, построенный в 1693-1699 годах. Это величественное пятиглавое здание является главным храмом Рязанского кремля и архитектурной доминантой города. Собор славится своими уникальными фресками XVII века, богатым иконостасом и впечатляющей архитектурой в стиле нарышкинского барокко. Высота собора составляет 72 метра, что делает его одним из самых высоких храмов своего времени. Внутреннее убранство поражает своей красотой и величием, а с смотровой площадки открывается захватывающий вид на город и реку Оку.
            </Text>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={styles.readMoreButton}>
                {expanded ? 'Свернуть ' : 'Подробнее '}
              </Text>
            </TouchableOpacity>
          </View>
         <Text style={styles.conveniencesTitle}>Удобства</Text>
         <View style={styles.conveniences}>
            {conveniences.map((item, index) => (
              <View key={index} style={styles.convenienceItem}>
                <Icon name={item.icon} style={styles.convenienceIcon} />
                <Text style={styles.convenienceText}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={styles.labelPrice}>Цена</Text>
          <Text style={styles.price}>$199</Text>
        </View>
        <TouchableOpacity 
          style={isBooked ? styles.cancelButton : styles.bookButton} 
          onPress={() => setIsBooked(!isBooked)}
        >
          <Text style={isBooked ? styles.cancelButtonText : styles.bookButtonText}>
            {isBooked ? 'Отменить' : 'Забронировать'}
          </Text>
          <Icon name="arrow-forward" size={20} color={isBooked ? "#4169E1" : "#FFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
    height: 300,
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 20,
  },
  heartButton: {
    position: 'absolute',
    top: 280,
    right: 25,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  content: {
    padding: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  mapLink: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#4169E1',
    fontSize: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontFamily: 'Montserrat-Regular',
    marginLeft: 5,
    color: '#000',
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    lineHeight: 20,
    marginBottom: 20,
  },
  conveniencesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 22,
    marginBottom: 15,
  },
  conveniences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  convenienceItem: {
    alignItems: 'center',
    backgroundColor: '#f0f3fb',
    padding: 12,
    borderRadius: 10,
    width: '22%',

  },
  convenienceText: {
    marginTop: 5,
    color: '#b8b8b8',
    fontSize: 12,
  },
  convenienceIcon: {
    color: '#b8b8b8',
    fontSize: 32,
    
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#78d5a8',
  },
  labelPrice: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
    fontSize: 16,
  },
  bookButton: {
    width: '65%',
    backgroundColor: '#4169E1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  bookButtonText: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    marginRight: 10,
    fontSize: 16,
  },
  cancelButton: {
    width: '65%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  cancelButtonText: {
    fontFamily: 'Montserrat-Regular',
    color: '#4169E1',
    marginRight: 10,
    fontSize: 16,
  },
  readMoreButton: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#4169E1',
    fontSize: 16,
    marginBottom: 25,
  },
});

export default PlusStackScreen;
