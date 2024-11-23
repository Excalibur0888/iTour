import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../Header/Header';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const navigation = useNavigation();
  const handleFavouritePress = () => {
    navigation.navigate('Favourite');
  };
  return (
    <View style={styles.main}>
      <Header />
      <ScrollView
        style={styles.profileContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar1.jpg')}
          />
          <Text style={styles.userName}>Андрей Иваков</Text>
          <Text style={styles.userRole}>Опытный турист</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Изменить профиль</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
              <Text style={styles.buttonText}>Выйти</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Пройдено маршрутов</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Посещенных городов</Text>
          </View>
        </View>
        <View style={styles.line}>
          <TouchableOpacity style={[styles.lineItem, styles.scores]}>
            <View style={styles.lineIcon}>
              <Icon
                name="checkmark-circle"
                size={25}
                color="#176FF2"
                style={styles.star}></Icon>
              <Text style={styles.lineText}>Баллы iTour</Text>
            </View>
            <View style={styles.starContainer}>
              <Text style={styles.scoresText}>152</Text>
              <Icon name="chevron-forward-sharp" size={25}></Icon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleFavouritePress}
            style={styles.lineItem}>
            <View style={styles.lineIcon}>
              <Icon
                name="heart-sharp"
                size={25}
                color="#176FF2"
                style={styles.star}></Icon>
              <Text style={styles.lineText}>Избранное</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.lineItem]}>
            <View style={styles.lineIcon}>
              <Icon
                name="bag-handle"
                size={25}
                color="#176FF2"
                style={styles.star}></Icon>
              <Text style={styles.lineText}>Выгодные предложения</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lineItem}>
            <View style={styles.lineIcon}>
              <Icon
                name="navigate"
                size={25}
                color="#176FF2"
                style={styles.star}></Icon>
              <Text style={styles.lineText}>Мои маршруты</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.lineItem}>
            <View style={styles.lineIcon}>
              <Icon
                name="settings"
                size={25}
                color="#176FF2"
                style={styles.star}></Icon>
              <Text style={styles.lineText}>Настройки</Text>
            </View>
            <Icon name="chevron-forward-sharp" size={25}></Icon>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
