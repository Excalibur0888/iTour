import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const MenuButton = ({onPress, children, isActive}) => {
  const iconColor = isActive ? '#176FF2' : '#B8B8B8';

  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <View style={styles.menuButtonContent}>
        <Icon name={children.iconName} size={30} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

const Menu = () => {
  const navigation = useNavigation();
  const [activeMenu, setActiveMenu] = useState('Main');

  return (
    <View style={styles.menu}>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Main'});
          setActiveMenu('Main');
        }}
        isActive={activeMenu === 'Main'}>
        {{iconName: 'home-outline'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Map'});
          setActiveMenu('Map');
        }}
        isActive={activeMenu === 'Map'}>
        {{iconName: 'map-outline'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Chat'});
          setActiveMenu('Chat');
        }}
        isActive={activeMenu === 'Chat'}>
        {{iconName: 'chatbubble-ellipses-outline'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Profile'});
          setActiveMenu('Profile');
        }}
        isActive={activeMenu === 'Profile'}>
        {{iconName: 'person-outline'}}
      </MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    flex: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  menuButton: {
    flex: 1,
    paddingHorizontal: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButtonContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default Menu;
