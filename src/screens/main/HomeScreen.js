/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {database} from '../../../firebase';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {onValue, ref} from 'firebase/database';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ProductCard} from '../../components/ProductCard';

const HomeScreen = ({navigation}) => {
  const [list, setList] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const catRef = ref(database, 'categories');
    onValue(catRef, snapshot => {
      const catList = ['all', ...Object.keys(snapshot.val()), 'others'];
      setCategories(catList);
    });
    const itemsRef = ref(database, 'items');
    onValue(itemsRef, snapshot => {
      let itemList = Object.values(snapshot.val());
      itemList = itemList.map((item, index) => {
        return {
          ...item,
          id: Object.keys(snapshot.val())[index],
        };
      });
      setList(itemList);
    });
  }, []);

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Swiper
          autoplay={true}
          autoplayTimeout={4}
          style={styles.swiper}
          showsPagination={false}>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.linearGradient]}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Plugs </Text>
                  <Text style={styles.sliderSubHeading}>30% OFF on NGK</Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <Icon
                      name="arrow-right"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/plug2.png')}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Tyres </Text>
                  <Text style={styles.sliderSubHeading}>
                    10% OFF on DiamondTyres
                  </Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <Icon
                      name="arrow-right"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/tyre.png')}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Brakes </Text>
                  <Text style={styles.sliderSubHeading}>
                    50% OFF on JkBrakes
                  </Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <Icon
                      name="arrow-right"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/brake.png')}
                />
              </View>
            </LinearGradient>
          </View>
        </Swiper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesBar}>
            {categories.map((item, index) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#F6F6F6',
                  paddingHorizontal: 10,
                  borderRadius: 50,
                  marginLeft: 5,
                }}
                onPress={() => {
                  setList(() =>
                    list.filter(
                      listItem =>
                        listItem.category.name.toLowerCase() ===
                        item.toLowerCase(),
                    ),
                  );
                }}
                key={index}>
                <Text style={styles.categoryTxt}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <FlatList
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <ProductCard
              item={item}
              key={item.id}
              itemId={item.id}
              index={index}
              navigation={navigation}
            />
          )}
          horizontal={true}
        />
        <View
          style={{
            backgroundColor: '#282931',
            flex: 1,
            width: '100%',
            paddingLeft: 15,
            paddingRight: 30,
            paddingVertical: 15,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#D4D4D4',
              }}>
              Search parts by Cars
            </Text>
            <Icon name="dots-horizontal" style={{color: '#D4D4D4'}} size={20} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 20}}>Honda Civic</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '60%',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="lightning-bolt"
                    size={18}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light'}}>
                    turbo
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="chart-bar" size={16} style={{color: 'white'}} />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Urbanist-Light',
                      marginLeft: 5,
                    }}>
                    2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 20,
                marginVertical: 10,
              }}>
              <Icon name="arrow-right" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{height: 0.2, backgroundColor: 'white', width: '100%'}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 20}}>Toyota Corolla</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '60%',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="lightning-bolt"
                    size={18}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light'}}>
                    CVT-I
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="chart-bar" size={16} style={{color: 'white'}} />
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'Urbanist-Light',
                      marginLeft: 5,
                    }}>
                    2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: 'white',
                borderRadius: 20,
                marginVertical: 10,
              }}>
              <Icon name="arrow-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    width: '90%',
    alignSelf: 'center',
  },
  swiper: {
    height: 150,
  },
  sliderHeading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sliderSubHeading: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  linearGradient: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  sliderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  shopNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 20,
  },
  shopNowTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  arrowIcon: {
    color: 'white',
    marginLeft: 10,
    marginTop: 5,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImg: {
    height: 80,
    width: 80,
    margin: 10,
  },
  categoriesBar: {
    flexDirection: 'row',
    width: 500,
    marginRight: 30,
    marginBottom: 20,
  },
  categoryTxt: {
    alignSelf: 'center',
    padding: 5,
    color: 'black',
  },
});
