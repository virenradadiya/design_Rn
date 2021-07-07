import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import BottomTab from './src/navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


export default function App() {

  const MainStackNavigation = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>

  )
}
