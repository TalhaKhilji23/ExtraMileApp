import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PasswordChangedScreen = ({navigation}) => {
  return (
    <View style={styles.container} rippleColor="rgba(0, 0, 0, .32)">
      <IconButton
        icon="chevron-left"
        color="black"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Icon name="check-decagram" size={120} color="#3E5E9B" style={styles.checkicon} />
      <View style={styles.container2}>
        <Text style={styles.urbanist}>Password Changed!</Text>
        <Text style={styles.smalltext}>
          Your password has been changed successfully
        </Text>
        <TouchableOpacity style={styles.loginbtn} theme={{borderRadius: 0}}>
          <Text style={styles.btntext}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordChangedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  urbanist: {
    color: 'black',
    fontFamily: 'Urbanist-Bold',
    fontSize: 26,
    marginTop: 20,
  },
  smalltext: {
    color: '#8391A1',
    fontFamily: 'Urbanist-Regular',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
    width: '60%',
    textAlign: 'center',
  },
  loginbtn: {
    width: '80%',
    marginTop: 50,
    backgroundColor: '#282931',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
  },
  btntext: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    borderRadius: 1,
  },
  forgetbtn: {
    alignSelf: 'flex-end',
    marginRight: '10%',
  },
  forgettxt: {
    color: '#8391A1',
    fontSize: 14,
    textAlign: 'right',
  },
  checkicon: {
    alignSelf: 'center',
  },
});
