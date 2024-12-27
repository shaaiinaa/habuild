import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ReferralScreen from '../screens/ReferralScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import MyReferral from '../screens/MyReferral';
import LeaderboardScreen from '../screens/LeaderBoardScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Referral" component={ReferralScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="MyRef" component={MyReferral} />
        <Stack.Screen name="LeaderBoard" component={LeaderboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
