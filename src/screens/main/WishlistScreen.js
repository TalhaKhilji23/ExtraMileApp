/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {auth, database} from '../../../firebase';
import {onValue, ref} from 'firebase/database';
import {ProductCard} from '../../components/ProductCard';

const WishlistScreen = ({navigation}) => {
  const user = auth.currentUser;
  const [list, setList] = useState([]);
  useEffect(() => {
    const listRef = ref(database, 'users/' + user.uid + '/wishlist');
    onValue(listRef, snapshot => {
      const data = snapshot.val();
      setList(Object.values(data));
    });
  }, [user.uid]);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          paddingTop: 10,
          flex: 1,
          alignSelf: 'center',
        }}>
        {list ? (
          <FlatList
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            data={list}
            key={'_'}
            keyExtractor={item => item.title}
            renderItem={({item, index}) => (
              <ProductCard item={item} key={index} index={index} likeBtn={false} navigation={navigation} />
            )}
            horizontal={false}
            verticalScrollIndicator={false}
            numColumns={2}
          />
        ) : (
          <Text>No items in wishlist</Text>
        )}
      </View>
    </View>
  );
};

export default WishlistScreen;
