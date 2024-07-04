/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {ref, set} from 'firebase/database';
import {database} from '../../../firebase';

const AddCategoryScreen = () => {
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');

  const handleAddCategory = () => {
    set(ref(database, 'categories/' + catName.toLowerCase()), {
      name: catName,
      description: catDesc,
    }).then(()=>{
        Alert.alert(
            'Category Saved!'
        );
    });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 50,
      }}>
      <Text
        style={{
          fontFamily: 'Urbanist-Regular',
          fontSize: 16,
          marginBottom: 50,
        }}>
        Enter details to add category
      </Text>
      <TextInput
        mode="outlined"
        textColor="#8391A1"
        style={styles.input}
        outlineColor="#F7F8F9"
        activeOutlineColor="#8391A1"
        selectionColor="black"
        placeholder="Enter category name"
        placeholderTextColor="#8391A1"
        value={catName}
        onChangeText={setCatName}
      />
      <TextInput
        mode="outlined"
        textColor="#8391A1"
        style={styles.input}
        outlineColor="#F7F8F9"
        activeOutlineColor="#8391A1"
        selectionColor="black"
        placeholder="Enter category description"
        placeholderTextColor="#8391A1"
        value={catDesc}
        onChangeText={setCatDesc}
      />
      <TouchableOpacity
        style={{
          marginTop: 50,
          backgroundColor: '#282931',
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 5,
          width: '80%',
        }}
        onPress={() => handleAddCategory()}
        theme={{borderRadius: 0}}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Urbanist-SemiBold',
            borderRadius: 1,
          }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCategoryScreen;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    backgroundColor: '#F7F8F9',
    marginVertical: 5,
  },
});
