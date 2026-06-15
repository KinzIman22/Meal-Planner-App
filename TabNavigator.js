import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PlannerScreen from '../screens/PlannerScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
        },

        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } 
          else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } 
          else if (route.name === 'Planner') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Planner" component={PlannerScreen} />
    </Tab.Navigator>
  );
}