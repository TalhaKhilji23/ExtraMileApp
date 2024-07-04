/* eslint-disable react-native/no-inline-styles */
import {updateProfile} from 'firebase/auth';
import {ref, set} from 'firebase/database';
import {ref as refStr, uploadBytes, uploadString} from 'firebase/storage';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary, showImagePicker} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {auth, database, storage} from '../../../firebase';

const UpdateProfileScreen = ({route, navigation}) => {
  const {userData} = route.params;
  const [newUsername, setNewUsername] = useState(userData?.username);
  const [newEmail, setNewEmail] = useState(userData?.email);
  const [newPhone, setNewPhone] = useState(userData?.phoneNumber);
  const [newPaymentAddress, setNewPaymentAddress] = useState(
    userData?.paymentAddress,
  );
  const [newDeliveryAddress, setNewDeliveryAddress] = useState(
    userData?.paymentAddress,
  );
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    launchCamera({mediaType: 'photo'}, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const filename = newUsername + '_Image' + '.jpg';
        console.log(response.assets[0].uri.replace('file://', ''));
        setImage(response.assets[0].uri);
      }
    });
  };
  const updateAlert = () => {
    Alert.alert(
      'Update Account Information',
      'Are you sure? Do you wish to proceed?',
      [
        {
          text: 'Update',
          onPress: () => {
            console.log('IMAGE', image);
            updateProfile(auth.currentUser, {
              displayName: newUsername,
              email: newEmail,
              phoneNumber: newPhone,
            });
            set(ref(database, `users/${auth.currentUser.uid}`), {
              username: newUsername,
              email: newEmail,
              phoneNumber: newPhone,
              paymentAddress: newPaymentAddress,
              deliveryAddress: newDeliveryAddress,
              image: image,
            });
            navigation.navigate('UserProfile');
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
    <ScrollView
      style={{flex: 1, width: '100%', height: '100%', marginVertical: '5%'}}>
      <Text
        style={{
          color: '#535353',
          fontFamily: 'Sans-Serif',
          fontSize: 20,
          marginBottom: '5%',
          fontWeight: 'bolder',
          marginHorizontal: '5%',
        }}>
        Edit Profile Information
      </Text>
      <View
        style={{
          borderRadius: 250,
          backgroundColor: '#F6F6F6',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          width: 150,
          alignSelf: 'center',
        }}>
        {image ? (
          <Image
            source={{uri: image}}
            style={{
              width: 150,
              height: 150,
              borderRadius: 250,
            }}
          />
        ) : (
          <Image
            source={require('../../assets/avatar.png')}
            style={{width: 150, height: 150}}
          />
        )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#F6F6F6',
            borderRadius: 50,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => pickImage()}>
          <Icon name="camera" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: '10%', marginBottom: '5%'}}>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>New Name</Text>
          <TextInput
            style={styles.text_view}
            placeholder="username"
            placeholderTextColor="#535353"
            value={newUsername}
            onChangeText={setNewUsername}
          />
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>New Email</Text>
          <TextInput
            style={styles.text_view}
            placeholder="user@mail.com"
            placeholderTextColor="#535353"
            value={newEmail}
            onChangeText={setNewEmail}
          />
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>New Phone</Text>
          <TextInput
            style={styles.text_view}
            placeholder="e.g. +92 xxx xxxxxxx"
            placeholderTextColor="#535353"
            value={newPhone}
            onChangeText={setNewPhone}
          />
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>New Payment Address</Text>
          <TextInput
            style={styles.text_view}
            placeholder="e.g. House No. 123, Street 1, Rwp"
            placeholderTextColor="#535353"
            value={newPaymentAddress}
            onChangeText={setNewPaymentAddress}
          />
        </View>
        <View style={styles.outer_view}>
          <Text style={styles.outer_text}>New Delivery Address</Text>
          <TextInput
            style={styles.text_view}
            placeholder="e.g. House No. 123, Street 1, Rwp"
            placeholderTextColor="#535353"
            value={newDeliveryAddress}
            onChangeText={setNewDeliveryAddress}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '5%',
          marginHorizontal: '10%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.button_view1}>
          <Text style={styles.view_text1}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_view2} onPress={updateAlert}>
          <Text style={styles.view_text2}>Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outer_text: {
    fontFamily: 'Sans-Serif',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
    paddingBottom: '1%',
  },
  text_view: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    borderRadius: 15,
  },
  outer_view: {
    paddingVertical: '3%',
  },
  button_view1: {
    backgroundColor: '#E4EDEC',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  button_view2: {
    backgroundColor: '#282931',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
  },
  view_text1: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    color: 'black',
    fontWeight: '600',
  },
  view_text2: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: '3%',
    color: 'white',
    fontWeight: '600',
  },
});

export default UpdateProfileScreen;
