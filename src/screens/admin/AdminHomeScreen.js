/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

const AdminHomeScreen = ({navigation}) => {
  const logoutAlert = () => {
    Alert.alert(
      'Log Out',
      'Are you sure?',
      [
        {
          text: 'Log Out',
          onPress: () => {
            Alert.alert('Logged Out.');
            signOut(auth)
              .then(() => {
                console.log('Signed out');
              })
              .catch(err => {
                console.log(err);
              });
          },
          style: 'Cancel',
        },
        {
          text: 'Cancel',
          style: 'Cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 50,
      }}>
      <Text style={{fontFamily: 'Urbanist-Regular', fontSize: 20}}>
        Welcome to
      </Text>
      <Text style={{fontFamily: 'Whisper', fontSize: 40}}>ExtraMile Admin</Text>
      <TouchableOpacity
        style={{
          marginTop: 80,
          backgroundColor: '#282931',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 5,
          width: '80%',
        }}
        onPress={() => navigation.navigate('AddItem')}
        theme={{borderRadius: 0}}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Urbanist-SemiBold',
            borderRadius: 1,
          }}>
          Add Item
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#282931',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 5,
          width: '80%',
        }}
        onPress={() => navigation.navigate('AddCategory')}
        theme={{borderRadius: 0}}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Urbanist-SemiBold',
            borderRadius: 1,
          }}>
          Add Category
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: '#282931',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 5,
          width: '80%',
        }}
        onPress={() => logoutAlert()}
        theme={{borderRadius: 0}}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Urbanist-SemiBold',
            borderRadius: 1,
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AdminHomeScreen;
