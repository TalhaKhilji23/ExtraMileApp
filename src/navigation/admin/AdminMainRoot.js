import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SellerDetailsScreen from '../../screens/admin/SellerDetailsScreen';
import TabViewScreen from '../../screens/admin/TabViewScreen';
import AdminHomeScreen from '../../screens/admin/AdminHomeScreen';
import AddItemScreen from '../../screens/admin/AddItemScreen';
import AddCategoryScreen from '../../screens/admin/AddCategoryScreen';

const AdminMainRoot = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="AdminHome"
          component={AdminHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{
            headerTitle: 'Add Item',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={{
            headerTitle: 'Add Category',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="SellerDetails"
          component={SellerDetailsScreen}
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

export default AdminMainRoot;
