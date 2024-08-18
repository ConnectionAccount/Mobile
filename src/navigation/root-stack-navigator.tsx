import React from 'react'
import { NavigationRoutes, RootStackParamList } from './types';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from '../screens/home/home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen, Group } = Stack

const MainRootStack = () => {
  return (
    <Group
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen
            name={NavigationRoutes.HomeScreen} 
            component={HomeScreen}
        />
    </Group>
  )
}

const RootStackNavigator = () => {
    return (
        <Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationRoutes.HomeScreen}
        >
            {MainRootStack()}
        </Navigator>
    )
}

export { RootStackNavigator };