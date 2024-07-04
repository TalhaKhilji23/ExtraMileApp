import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();
let cars = [];
function HomeHeader(props) {
  return (
    <View style={{flex: 1}}>
      <MaterialIcons
        name="menu"
        style={{
          color: 'black',
          marginLeft: 20,
          marginTop: 16,
          height: 30,
        }}
        size={25}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
      <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
    </View>
  );
}
function GenerelHeader(props) {
  return (
    <View style={{flex: 1}}>
      <Text style={[styles.defaultStyle, props.style]}>{props.children}</Text>
    </View>
  );
}
function ListOfCars({navigation, route}) {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddCar');
          }}
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: 15,
            height: 25,
            width: 70,
            marginRight: 5,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              padding: 2,
              alignSelf: 'center',
            }}>
            AddCar
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const isfocussed = useIsFocused();
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    getData();
  }, [isfocussed]);
  const getData = async () => {
    const carsS = await AsyncStorage.getItem('CARS');
    setCarsList(JSON.parse(carsS));
  };
  const deleteCars = async index => {
    const temData = carsList;
    const selectedata = temData.filter((item, ind) => {
      return ind != index;
    });
    setCarsList(selectedata);
    await AsyncStorage.setItem('CARS', JSON.stringify(selectedata));
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        data={carsList}
        renderItem={({item, index}) => {
          const img = item.photo;
          return (
            <View style={{width: 300, height: 180, alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CarDetails', {list: item})}>
                <View
                  style={{
                    marginTop: 10,
                    borderWidth: 1,
                    borderColor: 'lightgrey',
                    borderRadius: 20,
                    backgroundColor: 'white',
                    shadowColor: 'grey',
                  }}>
                  {' '}
                  <View>
                    <Text style={{margin: 10}}>Make :{item.make}</Text>
                    <Text style={{marginLeft: 10}}>Model : {item.model}</Text>
                    <Image
                      style={{
                        width: 90,
                        height: 90,
                        marginLeft: 10,
                        borderRadius: 12,
                        marginTop: 15,
                        marginBottom: 5,
                      }}
                      source={{uri: item.photo}}></Image>
                  </View>
                  <View>
                    {' '}
                    <TouchableOpacity
                      onPress={() => {
                        deleteCars(index);
                      }}
                      style={{
                        height: 32,
                        width: 100,
                        backgroundColor: 'red',
                        marginLeft: 180,
                        marginTop: -100,
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          alignSelf: 'center',
                          fontSize: 15,
                          color: 'white',
                          fontWeight: 'bold',
                          padding: 4,
                        }}>
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
function CarDetails({navigation, route}) {
  const {list} = route.params;
  const make = list.make;
  const model = list.model;
  const year = list.year;
  const engine = list.engine;
  const color = list.color;
  const photo = list.photo;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Image
          style={{
            ...styles.image,
            width: 270,
            height: 270,
            marginLeft: 20,
            borderRadius: 12,
            marginTop: 20,
          }}
          source={{uri: photo}}></Image>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.Text]}>Make : </Text>
          <Text style={{color: 'grey', marginLeft: 30, marginTop: 32}}>
            {make}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Model : </Text>
          <Text style={{color: 'grey', marginLeft: 25, marginTop: 32}}>
            {model}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Engine :</Text>
          <Text style={{color: 'grey', marginLeft: 30, marginTop: 32}}>
            {engine}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Year : </Text>
          <Text style={{color: 'grey', marginLeft: 40, marginTop: 32}}>
            {year}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Text}>Color : </Text>
          <Text style={{color: 'grey', marginLeft: 30, marginTop: 32}}>
            {color}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
function AddCar({navigation}) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engine, setEngine] = useState('');
  const [color, setColor] = useState('');
  const [photo, setPhoto] = useState('');
  const saveCars = async () => {
    let tempCars = [];
    cars = [];
    let x = JSON.parse(await AsyncStorage.getItem('CARS'));
    tempCars = x;
    tempCars.map(item => {
      cars.push(item);
    });
    cars.push({
      make: make,
      model: model,
      year: year,
      engine: engine,
      color: color,
      photo: photo,
    });
    await AsyncStorage.setItem('CARS', JSON.stringify(cars));
    navigation.navigate('ListOfCars');
  };
  const getValueFunction = () => {
    AsyncStorage.getItem('any_key_here').then(value => setList(value));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Make"
          value={make}
          onChangeText={setMake}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Model"
          keyboardType="number-type"
          value={model}
          onChangeText={setModel}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Year"
          value={year}
          onChangeText={setYear}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Engine"
          value={engine}
          onChangeText={setEngine}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Color"
          value={color}
          onChangeText={setColor}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TextInput
          placeholder="Enter Photo"
          value={photo}
          onChangeText={setPhoto}
          underlineColorAndroid="transparent"
          style={styles.textInputStyle}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          disabled={
            make.length == 0 ||
            model.length == 0 ||
            photo == 0 ||
            color == 0 ||
            engine == 0
          }
          onPress={() => saveCars()}>
          <Text style={styles.buttonTextStyle}> Post </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
function ManageCarStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ListOfCars">
        <Stack.Screen
          name="ListOfCars"
          component={ListOfCars}
          options={{
            headerTitle: props => (
              <HomeHeader
                {...props}
                text="List Of 
Cars"
                style={{marginLeft: 100, marginTop: -30}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="CarDetails"
          component={CarDetails}
          options={{
            headerTitle: props => (
              <GenerelHeader
                {...props}
                style={{marginLeft: 50}}
                text="Car Details"
              />
            ),
          }}
        />
        <Stack.Screen
          name="AddCar"
          component={AddCar}
          options={{
            headerTitle: props => (
              <GenerelHeader
                {...props}
                style={{marginLeft: 60}}
                text="Add a Car"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Brands() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Koinesegg',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Toyota',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Mercedez',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'AUDI',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'MAclaren',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Poorche',
    },
  ];
  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
function BrandDetails({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate('Brands')} title="Go Brand" />
    </View>
  );
}
function ManageCarBrands() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Brands">
        <Stack.Screen
          name="Brands"
          component={Brands}
          options={{
            title: 'Brands',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BrandDetails"
          component={BrandDetails}
          options={{
            title: 'BrandDetails',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();
function DrawerApp() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          name="ManageCars"
          component={ManageCarStack}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen name="ManageCarBrands" component={ManageCarBrands} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="drawer"
          component={DrawerApp}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  buttonStyle: {
    color: 'white',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 50,
    width: 250,
  },
  buttonTextStyle: {
    padding: 5,
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
  Text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 30,
    marginTop: 30,
  },
  // ... add your default style here
  defaultStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  item: {
    backgroundColor: '#blue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textInputStyle: {
    textAlign: 'center',
    borderRadius: 8,
    height: 40,
    marginTop: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});
