/* eslint-disable react-native/no-inline-styles */
import {Picker} from '@react-native-picker/picker';
import {onValue, push, ref} from 'firebase/database';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {database} from '../../../firebase';

export default function AddItemScreen({navigation, routes}) {
  const [imageUri, setImageUri] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('others');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const catRef = ref(database, 'categories');
    onValue(catRef, snapshot => {
      const catList = Object.values(snapshot.val());
      setCategories(catList);
      console.log(categories);
    });
  }, []);

  const addpost = () => {
    push(ref(database, '/items/'), {
      image: imageUri,
      location: location,
      category: category,
      title: title,
      price: price,
      description: description,
      name: name,
      number: number,
    });
    Alert.alert('Add is Posted');
    setImageUri();
    setLocation('');
    setCategory('');
    setTitle('');
    setPrice('');
    setDescription('');
    setName('');
    setNumber('');
    navigation.navigate('AdminHome');
  };
  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    //  console.log(result.assets[0].uri);
    setImageUri(result.assets[0].uri);
  };

  return (
    <ScrollView style={{padding: 20, backgroundColor: '#ffffff'}}>
      <View style={{flex: 1}}>
        {imageUri === '' ? (
          <IconButton
            icon="camera-plus-outline"
            style={styles.camerabtn}
            iconColor="#33363F"
            size={50}
            onPress={openGallery}
          />
        ) : (
          <TouchableOpacity onPress={openGallery}>
            <View style={styles.button}>
              <Image
                source={{uri: imageUri}}
                resizeMode="cover"
                style={{height: 100, width: '95%'}}
              />
            </View>
          </TouchableOpacity>
        )}

        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 11.5}}>
            Tap on the above dotted box to upload / reupload an image of your
            product.
          </Text>
        </View>

        <View style={styles.info}>
          <View>
            <Icon name="drive-file-rename-outline" size={40} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Title
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Title"
                placeholderTextColor="#535353"
                value={title}
                onChangeText={setTitle}
              />
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View>
            <Icon name="location-pin" size={40} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Location
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Location"
                placeholderTextColor="#535353"
                value={location}
                onChangeText={setLocation}
              />
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={{padding: 5}}>
            <Icon name="indeterminate-check-box" size={30} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Category
            </Text>
            <View>
              <Picker
                selectedValue={category}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) =>
                  setCategory(itemValue)
                }>
                {categories.length !== 0
                  ? categories.map(catIns => {
                      return (
                        <Picker.Item
                          label={catIns.name}
                          value={catIns.name.toLowerCase()}
                          key={catIns.name}
                        />
                      );
                    })
                  : null}
              </Picker>
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={{padding: 5}}>
            <Icon name="money" size={30} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Price
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Price"
                placeholderTextColor="#535353"
                value={price}
                onChangeText={setPrice}
              />
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={{padding: 5}}>
            <Icon name="format-align-justify" size={30} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Description
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Description"
                placeholderTextColor="#535353"
                value={description}
                onChangeText={setDescription}
              />
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
          <View style={{padding: 5}}>
            <Icon name="format-align-justify" size={30} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Seller Name
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Name"
                placeholderTextColor="#535353"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
        </View>
        <View style={styles.info}>
          <View style={{padding: 5}}>
            <Icon name="format-align-justify" size={30} />
          </View>
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#282931'}}>
              Seller Phone Number
            </Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone number"
                placeholderTextColor="#535353"
                value={number}
                onChangeText={setNumber}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginBottom: 60,
            marginTop: 20,
            backgroundColor: '#282931',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            borderRadius: 5,
          }}
          onPress={() => addpost()}
          theme={{borderRadius: 0}}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'Urbanist-SemiBold',
              borderRadius: 1,
            }}>
            Post Your Add
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  camerabtn: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 120,
    width: '100%',
    borderStyle: 'dotted',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: 'grey',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    height: 120,
    width: '100%',
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
  info: {
    flex: 1,
    flexDirection: 'row',
    marginStart: 0,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#E4EDEC',
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    padding: 4,
    borderRadius: 10,
    width: '100%',
  },
  post: {
    backgroundColor: '#282931',
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  scene: {
    flex: 1,
  },
});
