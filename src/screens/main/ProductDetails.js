/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../global/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {onValue, ref} from 'firebase/database';
import {database} from '../../../firebase';

export default function ProductDetails({route, navigation}) {
  const {id} = route.params;
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const itemRef = ref(database, 'items/' + id);
    onValue(itemRef, snapshot => {
      const data = snapshot.val();
      setItem(data);
      setTotal(data?.price);
    });
  }, [id]);

  useEffect(() => {
    setTotal(count * item?.price);
  }, [count, item]);

  return (
    <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
      <Image
        style={{
          ...styles.image,
          width: '90%',
          height: '40%',
          marginLeft: 20,
          borderRadius: 12,
          marginTop: 20,
        }}
        source={{uri: item?.image}}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 45,
              height: 45,
              marginLeft: 30,
              borderRadius: 12,
              marginTop: 38,
            }}
            source={{uri: item?.image}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 50,
              height: 50,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 35,
            }}
            source={{uri: item?.image}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 65,
              height: 65,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 25,
            }}
            source={{uri: item?.image}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 75,
              height: 75,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 20,
            }}
            source={{uri: item?.image}}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            color: colors.black2,
            marginLeft: 30,
            fontSize: 22,
            fontWeight: '500',
          }}>
          {item?.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 30,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star-border"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </View>
          <View>
            <Text style={{fontWeight: '300', color: '#C0C0C0'}}>
              Reviews(123)
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.black3,
              marginLeft: 30,
              fontSize: 18,
              fontWeight: '500',
            }}>
            Rs{' '}
          </Text>
          <Text
            style={{
              color: colors.black3,
              marginLeft: 4,
              fontSize: 18,
              fontWeight: '500',
            }}>
            {item?.price}
          </Text>
        </View>

        <View>
          <Text style={{marginLeft: 30, marginTop: 10}}>
            {item?.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={count <= 0 ? true : false}
            onPress={() => {
              setCount(count - 1);
            }}
            style={{
              borderWidth: 1,
              marginLeft: 30,
              marginTop: 10,
              borderRadius: 5,
              borderColor: '#535353',
              width: 30,
              height: 30,
            }}>
            <Text
              style={{
                fontSize: 24,
                alignSelf: 'center',
                color: '#535353',
                marginTop: -3,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.Text,
              {fontSize: 20, marginTop: 10, marginLeft: 15},
            ]}>
            {count}
          </Text>

          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}
            style={{
              borderWidth: 1,
              marginLeft: -5,
              marginTop: 10,
              borderRadius: 5,
              borderColor: '#535353',
              width: 30,
              height: 30,
            }}>
            <Text
              style={{
                fontSize: 24,
                alignSelf: 'center',
                color: '#535353',
                marginTop: -3,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 30}}>
            <Text style={[styles.txt, {fontSize: 17}]}>Total : Rs </Text>
            <Text style={[styles.txt, {fontSize: 17}]}>{total}</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.black1,
              marginTop: 20,
              width: 140,
              borderRadius: 6,
              marginRight: 20,
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialIcons
              name="local-mall"
              style={{
                color: colors.cardBackground,
                marginLeft: 10,
                marginTop: 8,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                marginRight: 16,
                marginTop: 8,
              }}>
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: colors.black1,
    marginLeft: 30,
    margin: 20,
  },
  txt: {
    marginLeft: 10,
    color: colors.black2,
  },
});
