/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import { push, ref, set } from 'firebase/database';
import { auth, database } from '../../../firebase';

const MyWalletScreen = ({navigation}) => {
  const user = auth.currentUser;
  const [total, setTotal] = useState(0);
  const cart = useSelector(state => state.items);
  useEffect(() => {
    var amount = 0;
    cart.forEach(item => {
      amount += item.price * item.quantity;
    });
    setTotal(amount);
  }, [cart]);
  const handlePayNow = () => {
    push(ref(database, 'orders'), {
      cart: cart,
      total: total,
      customerId: user.uid,
    })
    Alert.alert(
      'Payment Successful',
      'Your order has been placed successfully',
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar Style={'light-content'} backgroundColor={'black'} />

      <View style={styles.view1}>
        <View style={{marginLeft: '10%'}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 22,
              color: 'white',
              marginTop: '15%',
            }}>
            MY WALLET
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 12,
              color: 'white',
              marginTop: '3%',
              fontWeight: '100',
            }}>
            Total Balance
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 25,
                  color: 'white',
                  marginTop: '3%',
                  marginRight: '3%',
                }}>
                Rs
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins',
                  fontSize: 25,
                  color: 'white',
                  marginTop: '3%',
                }}>
                74,987
              </Text>
            </View>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 12,
                color: 'white',
                marginTop: '3%',
                fontWeight: '100',
                marginRight: '10%',
              }}>
              -Rs 35897 Today
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#000000', '#282931', '#6A6A6A']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.view2}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 30,
              color: 'white',
              fontWeight: 'bold',
              marginRight: '10%',
              marginTop: 20,
            }}>
            VISA
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 13,
              color: 'white',
              fontWeight: '100',
              marginRight: '10%',
            }}>
            Credit
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 13,
              color: 'white',
              fontWeight: '100',
              marginRight: '10%',
            }}>
            Card
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 23,
              color: 'white',
              marginTop: '3%',
              fontWeight: '100',
              marginRight: '10%',
            }}>
            **** **** **** 4793
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 12,
                color: 'white',
                marginTop: '3%',
                fontWeight: '100',
              }}>
              iftikhar Ahmed
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontSize: 12,
                color: 'white',
                marginTop: '3%',
                fontWeight: '100',
                marginRight: '17%',
              }}>
              03/26
            </Text>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={{marginTop: '35%', marginLeft: '10%', marginRight: '10%'}}>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 24,
              color: 'black',
              marginTop: '3%',
              fontWeight: '100',
            }}>
            Items
          </Text>
          {cart.map((item, index) => {
            return (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',

                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'grey', fontWeight: '600'}}>
                  {item?.title}
                </Text>
                <Text
                  style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
                  Rs {item?.price}
                </Text>
              </View>
            );
          })}
          <Text
            style={{
              marginTop: 10,
              borderTopWidth: 1,
              borderStyle: 'dashed',
              borderColor: 'grey',
            }}
          />

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'grey', fontWeight: '600'}}>Sub Total</Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Rs {total}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'grey', fontWeight: '600'}}>Shipping</Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Rs 500
            </Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              borderTopWidth: 1,
              borderStyle: 'dashed',
              borderColor: 'grey',
            }}
          />

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',

              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 18}}>
              Total
            </Text>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Rs {total + 500}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => handlePayNow()}
            style={styles.btnShape}>
            <Text style={styles.btnText}>Pay Now!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    backgroundColor: '#282931',
    width: '100%',
    height: 250,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  view2: {
    width: '80%',
    alignSelf: 'center',

    height: 200,
    borderRadius: 30,
    marginTop: '10%',
    paddingLeft: '10%',
  },
  btnShape: {
    marginLeft: 1,
    backgroundColor: 'black',
    height: 50,
    marginTop: 10,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  btnText: {
    fontFamily: 'Urbanist-Bold',
    alignSelf: 'center',
    color: 'white',
    marginTop: 13,
    fontSize: 17,
  },
});

export default MyWalletScreen;
