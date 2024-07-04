/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import OnlinePayment from '../../components/OnlinePayement';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../global/globalStyles';

export default function PaymentDetails({navigation}) {
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{padding: '10%'}}>
          <View style={{marginLeft: '5%', marginTop: '5%'}}>
            <BouncyCheckbox
              fontSize={20}
              fillColor="#FF4242"
              unfillColor="#FFFFFF"
              isChecked={paymentMethod === 'Use Credit Card'}
              text="Use Credit Card"
              innerIconStyle={{borderWidth: 1}}
              onPress={() => setPaymentMethod('Use Credit Card')}
              textStyle={{
                fontFamily: 'Sans-Serif',
                color: 'black',
                fontSize: 16,
                textDecorationLine: 'none',
              }}
              disableBuiltInState
            />
          </View>
          <OnlinePayment />
          <View style={{marginLeft: '5%', marginTop: '5%'}}>
            <BouncyCheckbox
              fontSize={20}
              isChecked={paymentMethod === 'Cash on Delivery'}
              onPress={() => setPaymentMethod('Cash on Delivery')}
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
              disableBuiltInState
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MapScreen');
          }}
          style={{
            backgroundColor: '#061023',
            borderRadius: 30,
            flexDirection: 'row',
            width: '80%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Sans-Serif',
                paddingVertical: '4%',
                textAlign: 'center',
                marginLeft: '50%',
                fontWeight: '600',
                fontSize: 16,
              }}>
              Continue
            </Text>
            <MaterialIcons
              name="east"
              style={{
                color: colors.cardBackground,
                marginLeft: 10,
                marginTop: 15,
              }}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({});
