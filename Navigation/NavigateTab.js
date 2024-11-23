import React from 'react';
import Main from '../components/Main/Main';
import Profile from '../components/Profile/Profile';
import Map from '../components/Map/Map';
import PlusStackScreen from '../components/Modal/PlusStackScreen';
import ChatDialog from '../components/Chat/ChatDialog';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from '../components/Menu';
import Chat from '../components/Chat/Chat';
import Favourite from '../components/Profile/Favourite';

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
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Map" component={Map} />
		<Tab.Screen name="Chat" component={Chat} />
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
				<Stack.Screen name="ChatDialog" component={ChatDialog} />
				<Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="PlusStackScreen" component={PlusStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
