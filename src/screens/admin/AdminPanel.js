/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {database} from '../../../firebase';
import {ref, push, onValue, remove, update} from 'firebase/database';
import React,{useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Modal,
  TouchableHighlight,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {launchImageLibrary} from 'react-native-image-picker';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

function FirstRoute({navigation}) {
  const [data, setdata] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [imageUri, setimageUri] = useState();
  const [location, setlocation] = useState('');
  const [category, setcategory] = useState('');
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [keyno, setkeyno] = useState();
  const updatepost2 = () => {
    const postData = {
      Image: imageUri,
      category: category,
      description: description,
      location: location,
      name: name,
      number: number,
      price: price,
      title: title,
    };
    update(ref(database, '/posts/' + keyno), postData);

    alert('Post is upadated successfully!!');
    setModalVisible(false);
  };

  const updatepost = (
    key,
    Image,
    title,
    price,
    category,
    name,
    number,
    location,
    description,
  ) => {
    setimageUri(Image);
    settitle(title);
    setprice(price);
    setcategory(category);
    setname(name);
    setnumber(number);
    setlocation(location);
    setdescription(description);
    setModalVisible(true);

    setkeyno(key);
  };

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    //  console.log(result.assets[0].uri);
    setimageUri(result.assets[0].uri);
  };
  useEffect(() => {
    onValue(ref(database, '/posts/'), snapshot => {
      const Alldata = [];
      snapshot.forEach(snapshot => {
        const key = snapshot.key;
        const {
          Image,
          title,
          price,
          category,
          name,
          number,
          location,
          description,
        } = snapshot.val();
        const obj = {
          keys: key,
          Image: Image,
          title: title,
          price: price,
          category: category,
          name: name,
          number: number,
          location: location,
          description: description,
        };
        //  console.log(obj);

        Alldata.push(obj);
      });

      console.log(Alldata);
      setdata(Alldata);
    });
  }, []);

  const deleteItem = (
    key,
    Image,
    title,
    price,
    category,
    name,
    number,
    location,
    description,
  ) => {
    push(ref(database, '/postdeletes/'), {
      Image: Image,
      location: location,
      category: category,
      title: title,
      price: price,
      description: description,
      name: name,
      number: number,
    });
    remove(ref(database, '/posts/' + key));
  };
  return (
    <View style={[styles.scene, {backgroundColor: 'white'}]}>
      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={{flex: 1}}>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 30,
                  marginRight: 30,
                  color: 'black',
                }}>
                x
              </Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={openGallery}>
              <View style={styles.button1}>
                <Image
                  source={{uri: imageUri}}
                  resizeMode="contain"
                  style={{height: 140, width: 370}}></Image>
              </View>
            </TouchableOpacity>
            <View style={styles.text1}>
              <Text style={{fontSize: 11.5}}>
                Tap on images to edit them. To reoder, select the image, hold
                and drag.
              </Text>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#282931',
                    }}>
                    Location
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Location"
                    placeholderTextColor="#535353"
                    value={location}
                    onChangeText={setlocation}></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#282931',
                    }}>
                    Category
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Category"
                    placeholderTextColor="#535353"
                    value={category}
                    onChangeText={setcategory}></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#282931',
                    }}>
                    Title
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Title"
                    placeholderTextColor="#535353"
                    value={title}
                    onChangeText={settitle}></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#282931',
                    }}>
                    Price(PKR)
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Price(PKR)"
                    placeholderTextColor="#535353"
                    keyboardType="numeric"
                    value={price}
                    onChangeText={setprice}></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{flexDirection: 'column', marginLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#282931',
                    }}>
                    Description
                  </Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Description"
                    placeholderTextColor="#535353"
                    value={description}
                    onChangeText={setdescription}></TextInput>
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 19,
                  marginStart: 20,
                  marginTop: 20,
                  color: '#282931',
                }}>
                Contact Information
              </Text>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{marginLeft: 20}}>
                <TextInput
                  style={styles.input}
                  placeholder="Seller Name"
                  placeholderTextColor="#535353"
                  value={name}
                  onChangeText={setname}></TextInput>
              </View>
            </View>

            <View style={styles.info}>
              <View>
                <Text>Icon</Text>
              </View>
              <View style={{marginLeft: 20}}>
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#535353"
                  value={number}
                  onChangeText={setnumber}></TextInput>
              </View>
            </View>

            <View style={{marginStart: 20, marginTop: 10}}>
              <TouchableOpacity
                style={styles.post}
                onPress={updatepost2}
                disabled={
                  !imageUri ||
                  !location ||
                  !category ||
                  !title ||
                  !price ||
                  !description ||
                  !name ||
                  !number
                }>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Update Your Add
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        style={{width: '100%'}}
        data={data}
        numColumns={1}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 120,
              alignSelf: 'center',
              backgroundColor: '#fAfAfA',
              margin: 20,
              borderRadius: 10,
            }}>
            <Image
              source={{uri: item.Image}}
              style={{
                height: 110,
                width: 180,
                borderRadius: 10,
                margin: 5,
              }}></Image>

            <View style={{flexDirection: 'column', flex: 1}}>
              <Text style={{margin: 2, fontSize: 16, color: '#4D4D4D'}}>
                {item.title}{' '}
              </Text>
              <Text
                style={{
                  margin: 2,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                }}>
                {item.price}
              </Text>
              <Text style={{margin: 2, fontSize: 16, color: '#4D4D4D'}}>
                {item.category}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginTop: 4,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    updatepost(
                      item.keys,
                      item.Image,
                      item.title,
                      item.price,
                      item.category,
                      item.name,
                      item.number,
                      item.location,
                      item.description,
                    );
                  }}>
                  <Text style={{marginRight: 20, color: 'black'}}>set</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    deleteItem(
                      item.keys,
                      item.Image,
                      item.title,
                      item.price,
                      item.category,
                      item.name,
                      item.number,
                      item.location,
                      item.description,
                    )
                  }>
                  <Text style={{color: 'black'}}>del</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={() =>
          !data.length ? (
            <View
              style={{
                justifyContent: 'center',
                marginTop: 300,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                No Active Ads
              </Text>
              <Text style={{marginTop: 10}}>
                You haven't post anything yet. Would you like to sell something?
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

function SecondRoute() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    onValue(ref(database, '/postdeletes/'), snapshot => {
      const Alldata = [];
      snapshot.forEach(snapshot => {
        const key = snapshot.key;
        const {
          Image,
          title,
          price,
          category,
          name,
          number,
          location,
          description,
        } = snapshot.val();
        const obj = {
          keys: key,
          Image: Image,
          title: title,
          price: price,
          category: category,
          name: name,
          number: number,
          location: location,
          description: description,
        };
        //  console.log(obj);

        Alldata.push(obj);
      });

      console.log(Alldata);
      setdata(Alldata);
    });
  }, []);

  const deleteItem = key => {
    remove(ref(database, '/postdeletes/' + key));
  };
  const recycle = (
    key,
    Image,
    title,
    price,
    category,
    name,
    number,
    location,
    description,
  ) => {
    push(ref(database, '/posts/'), {
      Image: Image,
      location: location,
      category: category,
      title: title,
      price: price,
      description: description,
      name: name,
      number: number,
    });

    remove(ref(database, '/postdeletes/' + key));
  };

  return (
    <View style={[styles.scene, {backgroundColor: 'white'}]}>
      <FlatList
        style={{width: '100%'}}
        data={data}
        numColumns={1}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: 120,
              alignSelf: 'center',
              backgroundColor: '#fAfAfA',
              margin: 20,
              borderRadius: 10,
            }}>
            <Image
              source={{uri: item.Image}}
              style={{
                height: 110,
                width: 180,
                borderRadius: 10,
                margin: 5,
              }}></Image>

            <View style={{flexDirection: 'column', flex: 1}}>
              <Text style={{margin: 2, fontSize: 16, color: '#4D4D4D'}}>
                {item.title}{' '}
              </Text>
              <Text
                style={{
                  margin: 2,
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                }}>
                {item.price}
              </Text>
              <Text style={{margin: 2, fontSize: 16, color: '#4D4D4D'}}>
                {item.category}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginRight: 20,
                  marginTop: 4,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    recycle(
                      item.keys,
                      item.Image,
                      item.title,
                      item.price,
                      item.category,
                      item.name,
                      item.number,
                      item.location,
                      item.description,
                    )
                  }>
                  <Text style={{marginRight: 20, color: 'black'}}>rec</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteItem(item.keys)}>
                  <Text style={{color: 'black'}}>del</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        ListHeaderComponent={() =>
          !data.length ? (
            <View
              style={{
                justifyContent: 'center',
                marginTop: 300,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                No Removed Ads
              </Text>
              <Text style={{marginTop: 10}}>
                You haven't removed anything yet
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

function TabViews() {
  const renderTabBar = props => (
    <TabBar
      activeColor={'black'}
      inactiveColor={'grey'}
      {...props}
      indicatorStyle={{backgroundColor: null}}
      labelStyle={[{textTransform: 'capitalize'}, {fontWeight: 'bold'}]}
      style={{
        backgroundColor: '#fff',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        elevation: 0,
        borderRadius: 40,
        marginTop: 15,
        marginBottom: 15,
      }}
    />
  );

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
}

function AddScreen({navigation, routes}) {
  const [imageUri, setimageUri] = useState();
  const [location, setlocation] = useState('');
  const [category, setcategory] = useState('');
  const [title, settitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setdescription] = useState('');
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const addpost = () => {
    push(ref(database, '/posts/'), {
      Image: imageUri,
      location: location,
      category: category,
      title: title,
      price: price,
      description: description,
      name: name,
      number: number,
    });
    alert('Add is Posted');
    setimageUri();
    setlocation('');
    setcategory('');
    settitle('');
    setprice('');
    setdescription('');
    setname('');
    setnumber('');
    navigation.navigate('TabViews');
  };
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    //  console.log(result.assets[0].uri);
    setimageUri(result.assets[0].uri);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={openGallery}>
        <View style={styles.button}>
          <Image
            source={{uri: imageUri}}
            resizeMode="contain"
            style={{height: 140, width: 370}}></Image>
        </View>
      </TouchableOpacity>

      <View style={styles.text1}>
        <Text style={{fontSize: 11.5}}>
          Tap on images to edit them. To reoder, select the image, hold and
          drag.
        </Text>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Location
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Location"
              placeholderTextColor="#535353"
              value={location}
              onChangeText={setlocation}></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Category
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Category"
              placeholderTextColor="#535353"
              value={category}
              onChangeText={setcategory}></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Title
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Title"
              placeholderTextColor="#535353"
              value={title}
              onChangeText={settitle}></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Price(PKR)
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Price(PKR)"
              placeholderTextColor="#535353"
              keyboardType="numeric"
              value={price}
              onChangeText={setprice}></TextInput>
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Description
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Description"
              placeholderTextColor="#535353"
              value={description}
              onChangeText={setdescription}></TextInput>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 19,
            marginStart: 20,
            marginTop: 20,
            color: '#282931',
          }}>
          Contact Information
        </Text>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <TextInput
            style={styles.input}
            placeholder="Seller Name"
            placeholderTextColor="#535353"
            value={name}
            onChangeText={setname}></TextInput>
        </View>
      </View>

      <View style={styles.info}>
        <View>
          <Text>Icon</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#535353"
            value={number}
            onChangeText={setnumber}></TextInput>
        </View>
      </View>

      <View style={{marginStart: 20, marginTop: 20}}>
        <TouchableOpacity
          style={styles.post}
          onPress={addpost}
          disabled={
            !imageUri ||
            !location ||
            !category ||
            !title ||
            !price ||
            !description ||
            !name ||
            !number
          }>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Post Your Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function AdminApp() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AddScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabViews"
          component={TabViews}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 140,
    width: 370,
    borderStyle: 'dotted',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'grey',
  },
  button1: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 140,
    width: 370,
    borderStyle: 'dotted',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'grey',
  },
  text1: {
    marginEnd: 2,
    marginStart: 20,
  },
  info: {
    flexDirection: 'row',
    marginStart: 20,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: 4,
    borderRadius: 10,
    width: 320,
  },
  post: {
    backgroundColor: '#282931',
    height: 62,
    width: 370,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  scene: {
    flex: 1,
  },
});
