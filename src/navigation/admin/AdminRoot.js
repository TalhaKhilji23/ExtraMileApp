import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminLoginScreen from '../../screens/admin/AdminLoginScreen';
import TabViewScreen from '../../screens/admin/TabViewScreen';

const AdminRoot = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="AdminLogin"
          component={AdminLoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabViews"
          component={TabViewScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AdminRoot;
