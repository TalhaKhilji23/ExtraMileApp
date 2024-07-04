import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../global/globalStyles';
import {useSelector} from 'react-redux';

export default function SubTotal({sub}) {
  const cart = useSelector(state => state.items);
  const getSubTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <View>
      <Text style={styles.txt2}>{()=>getSubTotal()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt2: {
    marginTop: 15,
    color: 'grey',
    fontSize: 20,
    marginRight: 20,
    fontWeight: 'bold',
  },
});
