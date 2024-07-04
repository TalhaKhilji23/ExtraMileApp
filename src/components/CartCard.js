/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {productData} from '../global/Data';
import {add} from 'react-native-reanimated';
import {colors} from '../global/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../redux/cart';

export default function CartCard({item}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#FAF9F6',
          paddingBottom: 15,
          borderRadius: 10,
          marginVertical: 10,
        }}>
        <View style={styles.cartStyle}>
          <Image
            style={{
              ...styles.image,
              width: 80,
              height: 80,
              marginLeft: 10,
              borderRadius: 12,
              marginTop: 15,
            }}
            source={{uri: item?.image}}
          />

          <View>
            <View>
              <Text style={styles.productName}>{item?.title}</Text>
            </View>
            <View>
              <Text style={styles.productPrice}>{item?.price}</Text>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 20}}>
              <TouchableOpacity
                onPress={() => dispatch(incrementQuantity(item?.id))}>
                <MaterialIcons
                  name="control-point"
                  style={{color: 'grey', fontWeight: '100', marginTop: 2}}
                  size={25}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontWeight: '300',
                  fontSize: 20,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                {item?.quantity}
              </Text>
              <TouchableOpacity
                disabled={item?.quantity <= 1 ? true : false}
                onPress={() => dispatch(decrementQuantity(item?.id))}>
                <MaterialIcons
                  name="remove-circle-outline"
                  style={{color: 'grey', marginTop: 2}}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginLeft: 70, marginTop: 15}}>
            <Text style={styles.company}>{item?.seller}</Text>
            <TouchableOpacity
              onPress={() => dispatch(removeItem(item?.id))}>
              <MaterialIcons
                name="delete-outline"
                style={{color: 'red', marginTop: 5, marginLeft: 20}}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartStyle: {
    flexDirection: 'row',
  },
  productName: {
    fontSize: 17,
    color: colors.black1,
    marginLeft: '8%',
    alignSelf: 'center',
    marginTop: 15,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black1,
    marginLeft: 22,
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
