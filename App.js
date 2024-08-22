import { StatusBar } from 'expo-status-bar';
import React, { createContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from './Screens/MenuScreen';
import CartScreen from './Screens/CartScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { CartProvider } from './Components/CartContext';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
