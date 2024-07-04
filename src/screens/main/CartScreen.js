/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../global/globalStyles';
import CartCard from '../../components/CartCard';
import {useSelector} from 'react-redux';

export default function CartScreen({route, navigation}) {
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.items);
  useEffect(() => {
    var amount = 500;
    cart.forEach(item => {
      amount += item.price * item.quantity;
    });
    setTotal(amount);
  }, [cart]);
  console.log('CART SCREEN', cart);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.cardBackground,
          paddingHorizontal: 20,
        }}>
        <View>
          <ScrollView>
            {cart.map((item, index) => {
              return (
                <ScrollView keyboardShouldPersistTaps="handled">
                  <View>
                    <View>
                      <CartCard item={item} />
                    </View>
                  </View>
                </ScrollView>
              );
            })}
          </ScrollView>
        </View>

        <View>
          <View style={{marginTop: 10}}>
            <Text style={styles.giftCard}> Gift Card / Discount Code</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.textInput2}>
                <TextInput
                  style={{
                    height: 40,
                    fontSize: 17,
                  }}
                  placeholder={'Discount Code'}
                />
              </View>
              <TouchableOpacity style={{height: 40, marginTop: 10}}>
                <View
                  style={{
                    backgroundColor: '#F3F3F3',
                    borderRadius: 25,
                    height: 40,
                    width: 60,
                    marginRight: 10,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      alignSelf: 'center',
                      paddingHorizontal: 5,
                      marginBottom: 10,
                      color: colors.black1,
                    }}>
                    Apply
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.txt1}>SubTotal</Text>
            <Text style={styles.txt2}>{total - 500}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.txt1}>Shipping</Text>
            <Text style={styles.txt2}> Rs 500</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              marginTop: 10,
              width: 350,
              alignSelf: 'center',
              borderStyle: 'dashed',
              borderColor: 'lightgrey',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.txt1}>Total</Text>
            <Text style={styles.txt2}>{total}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PaymentDetails');
            }}
            disabled={cart.length === 0}
            style={{
              backgroundColor: colors.black1,
              height: 50,
              borderRadius: 12,
              width: '100%',
              alignSelf: 'center',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                flex: 1,
                color: colors.cardBackground,
                textAlign: 'center',
                fontSize: 19,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  giftCard: {
    fontSize: 18,
    color: '#718096',
    fontWeight: '500',
    marginTop: 10,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 20,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    width: '70%',
    marginTop: 10,
    height: 50,
  },
  txt1: {
    marginTop: 15,
    color: colors.black2,
    fontSize: 18,
  },
  txt2: {
    marginTop: 15,
    color: 'grey',
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 16,
    color: colors.black1,
    margin: 20,
  },
  cartStyle: {
    flexDirection: 'row',
  },
  productName: {
    fontSize: 17,
    color: colors.black1,
    alignSelf: 'center',
    marginTop: 15,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black1,
    width: 60,
  },
  company: {
    fontWeight: '500',
    fontSize: 15,
    width: 60,
    height: 40,
    color: '#4F5663',
  },
});
