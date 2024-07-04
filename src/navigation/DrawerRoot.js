import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import CategoriesScreen from '../screens/main/CategoriesScreen';
import TabRoot from './TabRoot';
import DrawerContents from '../components/DrawerContents';

const Drawer = createDrawerNavigator();

const DrawerRoot = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <DrawerContents {...props} />}
        >
        <Drawer.Screen
          name="HomeDrawer"
          component={TabRoot}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoot;

// const styles = StyleSheet.create({})
