import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from 'react-native-vector-icons/Octicons';

import {useNavigation} from '@react-navigation/native';

const MenuButton = ({onPress, children, isActive}) => {
  const iconColor = isActive ? '#176FF2' : '#B8B8B8';

  return (
    <TouchableHighlight style={styles.menuButton} onPress={onPress}>
      <View style={styles.menuButtonContent}>
        {children.iconName === 'home' ? (
          <Home name={children.iconName} size={30} color={iconColor} />
        ) : (
          <Icon name={children.iconName} size={30} color={iconColor} />
        )}
      </View>
    </TouchableHighlight>
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
        {{iconName: 'home'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Catalog'});
          setActiveMenu('Catalog');
        }}
        isActive={activeMenu === 'Catalog'}>
        {{iconName: 'map-outline'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Favourite'});
          setActiveMenu('Favourite');
        }}
        isActive={activeMenu === 'Favourite'}>
        {{iconName: 'chatbubble-ellipses-outline'}}
      </MenuButton>
      <MenuButton
        onPress={() => {
          navigation.navigate('MainTab', {screen: 'Assembly'});
          setActiveMenu('Assembly');
        }}
        isActive={activeMenu === 'Assembly'}>
        {{iconName: 'person-outline'}}
      </MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 22,
    paddingHorizontal: 30,
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
