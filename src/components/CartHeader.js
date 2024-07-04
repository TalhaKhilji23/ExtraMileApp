import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CartHeader() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: 150,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            marginLeft: 100,
            color: 'black',
            fontSize: 20,
          }}>
          Cart
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
