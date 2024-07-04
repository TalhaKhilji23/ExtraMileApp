/* eslint-disable react-native/no-inline-styles */
import {signOut} from 'firebase/auth';
import {onValue, ref} from 'firebase/database';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {auth, database} from '../../../firebase';

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

const deleteAlert = () => {
  Alert.alert(
    'Delete Account',
    'By deleting your account, all information will be deleted. Do you wish to proceed?',
    [
      {
        text: 'Delete',
        onPress: () => Alert.alert('Deleted Account.'),
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
function UserProfileScreen({navigation}) {
  const user = auth.currentUser;
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userRef = ref(database, 'users/' + user.uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, []);
  return (
    <ScrollView style={{flex: 1, width: '100%', height: '100%'}}>
      <View
        style={{
          padding: '10%',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            borderRadius: 250,
            backgroundColor: '#F6F6F6',
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            alignSelf: 'center',
          }}>
          {userData?.image ? (
            <Image
              source={{uri: userData.image}}
              style={{width: 150, height: 150, borderRadius: 250}}
            />
          ) : (
            <Image
              source={require('../../assets/avatar.png')}
              style={{width: 150, height: 150}}
            />
          )}
        </View>
        <View style={{alignItems: 'center', marginVertical: '5%'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#282931',
              flexDirection: 'row',
              padding: '2%',
              width: '45%',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              navigation.navigate('UpdateProfile', {userData: userData})
            }>
            <Icon name="camera" size={14} color="white" />
            <Text
              style={{
                fontFamily: 'Sans-Serif',
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                marginLeft: '5%',
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Name</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>{userData?.username}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Email</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>{userData?.email}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Phone</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>{userData?.phoneNumber}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Payment Address</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>{userData?.paymentAddress}</Text>
          </View>
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>Delivery Address</Text>
          <View style={styles.text_view}>
            <Text style={styles.inner_text}>{userData?.deliveryAddress}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '10%',
            paddingHorizontal: '10%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.button_view} onPress={deleteAlert}>
            <Text style={styles.view_text1}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_view} onPress={logoutAlert}>
            <Text style={styles.view_text2}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outer_text: {
    fontFamily: 'Urbanist',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
    paddingBottom: '1%',
  },
  text_view: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Urbanist',
    fontSize: 16,
    padding: '3%',
    borderRadius: 15,
  },
  outer_view: {
    paddingVertical: '3%',
  },
  view_text1: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    color: 'red',
    padding: '3%',
    fontWeight: '600',
  },
  view_text2: {
    fontFamily: 'Urbanist',
    fontSize: 16,
    padding: '3%',
    color: 'black',
    fontWeight: '600',
  },
  inner_text: {
    fontFamily: 'Urbanist',
    fontSize: 14,
    color: '#4F4F4F',
    marginLeft: 5,
  },
  button_view: {
    backgroundColor: '#E4EDEC',
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserProfileScreen;
