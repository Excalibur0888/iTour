import React from 'react';
import Main from '../components/Main/Main';
import Assembly from '../components/Assembly/Assembly';
import Catalog from '../components/Catalog/Catalog';
import Favourite from '../components/Favourite/Favourite';
import PlusStackScreen from '../components/newPC/PlusStackScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from '../components/Menu';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTab = () => (
  <Tab.Navigator
    tabBar={(props) => <Menu {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="Assembly" component={Assembly} />
    <Tab.Screen name="Catalog" component={Catalog} />
    <Tab.Screen name="Favourite" component={Favourite} />
  </Tab.Navigator>
);

export default function NavigateTab() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="PlusStackScreen" component={PlusStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
