/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

function OnlinePayment() {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingVertical: '10%'}}>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="Mastercard ending 234"
          placeholderTextColor="#535353"
        />
        <Text
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            marginLeft: '1%',
            marginTop: '5%',
            marginBottom: '3%',
          }}>
          Name on Card
        </Text>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="Muhammad Hammad"
          placeholderTextColor="#535353"
        />
        <Text
          style={{
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            marginLeft: '1%',
            marginTop: '5%',
            marginBottom: '3%',
          }}>
          Card Number
        </Text>
        <TextInput
          style={{
            backgroundColor: '#F7F8F9',
            fontFamily: 'Sans-Serif',
            fontSize: 16,
            padding: '4%',
            borderRadius: 10,
          }}
          placeholder="123 - 456 - 789 - 111 - 4793"
          placeholderTextColor="#535353"
        />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              marginLeft: '1%',
              marginTop: '5%',
              marginBottom: '3%',
            }}>
            Expiration
          </Text>
          <Text
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              marginTop: '5%',
              marginBottom: '3%',
              marginLeft: '45%',
            }}>
            CVC
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '20%',
            }}
            placeholder="03"
            placeholderTextColor="#535353"
          />
          <Text style={{marginLeft: '5%', fontSize: 25, color: '#535353'}}>
            /
          </Text>
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '20%',
              marginLeft: '5%',
            }}
            placeholder="24"
            placeholderTextColor="#535353"
          />
          <TextInput
            style={{
              backgroundColor: '#F7F8F9',
              fontFamily: 'Sans-Serif',
              fontSize: 16,
              padding: '4%',
              borderRadius: 10,
              width: '30%',
              marginLeft: '20%',
            }}
            placeholder="123"
            placeholderTextColor="#535353"
          />
        </View>
      </View>
    </View>
  );
}

function PaymentDetails() {
  return (
    <ScrollView style={{width: '100%', height: '100%', flex: 1}}>
      <View style={{padding: '10%'}}>
        <View style={{marginLeft: '5%', marginTop: '5%'}}>
          <BouncyCheckbox
            fontSize={20}
            fillColor="#FF4242"
            unfillColor="#FFFFFF"
            isChecked={false}
            text="Use Credit Card"
            innerIconStyle={{borderWidth: 1}}
            textStyle={{
              fontFamily: 'Sans-Serif',
              color: 'black',
              fontSize: 16,
              textDecorationLine: 'none',
            }}
            // onPress={(isChecked: true) => {
            //   OnlinePayment;
            // }}
          />
        </View>
        <OnlinePayment />
        <View style={{marginLeft: '5%', marginTop: '5%'}}>
          <BouncyCheckbox
            fontSize={20}
            isChecked={true}
            fillColor="#FF4242"
            unfillColor="#FFFFFF"
            text="Cash on Delivery"
            innerIconStyle={{borderWidth: 1}}
            textStyle={{
              fontFamily: 'Sans-Serif',
              color: 'black',
              fontSize: 16,
              textDecorationLine: 'none',
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#061023',
          borderRadius: 30,
          flexDirection: 'row',
          width: '80%',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Sans-Serif',
            paddingVertical: '4%',
            textAlign: 'center',
            marginLeft: '33%',
            fontWeight: '600',
            fontSize: 16,
          }}>
          Continue
        </Text>
        <Icon
          style={{marginLeft: '3%'}}
          name="arrowright"
          size={16}
          color="white"
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PaymentDetails;
