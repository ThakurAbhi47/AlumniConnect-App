// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './LandingPage';
import AuthPage from './AuthPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        {/* Landing Page */}
        <Stack.Screen 
          name="Landing" 
          component={LandingPage} 
          options={{ headerShown: false }} 
        />
        {/* Authentication Page (combined login and signup) */}
        <Stack.Screen 
          name="AuthPage" 
          component={AuthPage} 
          options={{ headerShown: false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
