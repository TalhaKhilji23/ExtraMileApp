/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import React from 'react';

export default function SplashScreen2() {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image
        style={styles.logo}
        source={require('../assets/splash.jpg')} />
      <Image
        style={[styles.logo, {height: 50}]}
        source={require('../assets/whitelogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});
