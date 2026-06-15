import React from 'react';
import 'react-native-gesture-handler';

import {
  NavigationContainer
} from '@react-navigation/native';

import StackNavigator from './navigation/StackNavigator';

import MealProvider from './context/MealContext';

export default function App() {

  return (

    <MealProvider>

      <NavigationContainer>

        <StackNavigator />

      </NavigationContainer>

    </MealProvider>

  );
}