import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import {TabProvider} from '../Habuild/TabContext';
import SessionHandler from './supabaseComponents/session-handler';
export default function App() {
  return (
    <SafeAreaProvider>
      <SessionHandler />
      <TabProvider>
        <AppNavigator />
      </TabProvider>
    </SafeAreaProvider>
  );
}
