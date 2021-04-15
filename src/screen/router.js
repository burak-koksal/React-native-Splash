import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

//screen
import SplashScreen from './SplashScreen';
import MainScreen from './MainScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle='dark-content' backgroundColor= '#00C7C9' translucent={true} />
      <Stack.Navigator  initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}