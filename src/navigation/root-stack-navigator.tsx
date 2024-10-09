import React from 'react';
import {NavigationRoutes, RootStackParamList} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home';
import {LoginScreen} from '../screens/auth/login';
import {ForgetPasswordScreen} from '../screens/auth/forget-password';
import {IntroductionScreen} from '../screens/auth/introduction';
import {CreateAccountScreen} from '../screens/auth/create-account';
import {ResetPasswordScreen} from '../screens/auth/reset-password';
import {TermScreen} from '../screens/auth/term';
import {SignupScreen} from '../screens/auth/signup';

const Stack = createNativeStackNavigator<RootStackParamList>();
const {Navigator, Screen, Group} = Stack;

const AuthRootStack = () => (
  <Group
    screenOptions={{
      headerShown: false,
    }}>
    <Screen
      name={NavigationRoutes.IntroductionScreen}
      component={IntroductionScreen}
    />
    <Screen name={NavigationRoutes.LoginScreen} component={LoginScreen} />
    <Screen name={NavigationRoutes.SignupScreen} component={SignupScreen} />
    <Screen
      name={NavigationRoutes.ForgetPasswordScreen}
      component={ForgetPasswordScreen}
    />
    <Screen
      name={NavigationRoutes.CreateAccountScreen}
      component={CreateAccountScreen}
    />
    <Screen name={NavigationRoutes.TermScreen} component={TermScreen} />
    <Screen
      name={NavigationRoutes.ResetPasswordScreen}
      component={ResetPasswordScreen}
    />
  </Group>
);

const MainRootStack = () => {
  return (
    <Group
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={NavigationRoutes.HomeScreen} component={HomeScreen} />
    </Group>
  );
};

const RootStackNavigator = () => {
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={NavigationRoutes.IntroductionScreen}>
      {MainRootStack()}
      {AuthRootStack()}
    </Navigator>
  );
};

export {RootStackNavigator};
