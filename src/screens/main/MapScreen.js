/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

export default function MapScreen({navigation}) {
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.items);
  useEffect(() => {
    var amount = 0;
    cart.forEach(item => {
      amount += item.price * item.quantity;
    });
    setTotal(amount + 500);
  }, [cart]);
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: '65%'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={require('../../assets/Maps.png')}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '22%',
          backgroundColor: '#282931',
          marginTop: '-5%',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: '10%',
            marginLeft: '5%',
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Your location
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          height: '15%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'row',
          marginTop: '-13%',
          borderRadius: 15,
        }}>
        <Text
          style={{
            marginTop: '5%',
            marginLeft: '4%',
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Khanna Pul, RawalPindi
        </Text>
        <Image
          style={{
            width: '40%',
            height: '160%',
            marginLeft: '-15%',
            marginTop: '-46%',
          }}
          source={require('../../assets/user.png')}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: '13%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{marginLeft: '10%', fontSize: 12}}>Total Bill</Text>
          <Text style={{marginLeft: '10%', fontSize: 30}}>Rs {total}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: 'black',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
            marginRight: 20,
          }}
          onPress={() => navigation.navigate('MyWallet')}>
          <Text style={{color: 'white', fontSize: 16}}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
