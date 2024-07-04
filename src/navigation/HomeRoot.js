import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/main/HomeScreen';
import ProductDetails from '../screens/main/ProductDetails';
import {Button, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';

const HomeRoot = ({navigation}) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={styles.header}>
                <MaterialIcons
                  name="menu"
                  onPress={() => navigation.openDrawer()}
                  size={24}
                  style={styles.drawerBtn}
                />
                <Searchbar
                  style={styles.searchBar}
                  placeholder="looking for something"
                  placeholderTextColor="gray"
                  inputStyle={styles.searchBarText}
                  elevation={0}
                />
              </View>
            ),
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeRoot;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    width: '96%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 36,
    lineHeight: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  searchBarText: {
    fontSize: 16,
    padding: 0,
  },
  drawerBtn: {
    padding: 0,
    marginRight: 10,
  },
});

