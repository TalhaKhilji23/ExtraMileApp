import {ImageBackground, View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, incrementByAmount} from '../redux/counter';

const carImage = require('../assets/rangeroverdim.jpeg');

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={carImage} style={styles.image}>
        <View style={styles.dropcontainer}>
          <Button
            onPress={() => navigation.navigate('Login')}
            mode="contained-tonal"
            buttonColor="white"
            textColor="black"
            style={styles.button}>
            <Text style={styles.letsgo}>Let's Go</Text>
          </Button>
          <Text style={styles.smalltext}>
            Premium and prestige car spare parts. Experience your as new once
            again.
          </Text>
          <Text variant="headlineMedium" style={styles.heading}>
            Best car parts{'\n'}Enjoy an{' '}
            <Text style={styles.whisper}>ExtraMile</Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
  },
  heading: {
    color: 'white',
    fontWeight: 'bold',
    lineHeight: 40,
  },
  dropcontainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    margin: '8%',
  },
  whisper: {
    fontFamily: 'Whisper',
    color: 'white',
    fontSize: 40,
  },
  smalltext: {
    color: '#8E8E8E',
    fontSize: 14,
    fontWeight: 'light',
    lineHeight: 20,
    marginTop: 5,
  },
  button: {
    marginTop: 40,
    marginBottom: 20,
  },
  letsgo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
};

export default WelcomeScreen;
