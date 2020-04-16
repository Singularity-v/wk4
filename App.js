import React from "react";
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import {Image,StyleSheet,TouchableOpacity,View } from 'react-native';
import Header from "./scr/components/Header";
import Message from "./scr/components/Message";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name=" "
          component={Header}
          options={{
            headerStyle: {
              height: 0,
            },
          }} />

        <Stack.Screen name="Message" component={Message}
          options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;