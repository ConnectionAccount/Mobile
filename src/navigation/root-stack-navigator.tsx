import React from 'react'
import { NavigationRoutes, RootStackParamList } from './types';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/auth/login';

const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen, Group } = Stack

const AuthRootStack = () => (
    <Group
        screenOptions={{
            headerShown: false,
        }}
    >
        <Screen
            name={NavigationRoutes.LoginScreen}
            component={LoginScreen}
        />
    </Group>
)

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
            // initialRouteName={NavigationRoutes.HomeScreen}
            initialRouteName={NavigationRoutes.LoginScreen}
        >
            {MainRootStack()}
            {AuthRootStack()}
        </Navigator>
    )
}

export { RootStackNavigator };