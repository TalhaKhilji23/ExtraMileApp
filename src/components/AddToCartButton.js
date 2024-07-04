/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {addItem} from '../redux/cart';

const AddToCartButton = ({item, itemId}) => {
  const cartIcon = `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.19687 6.34662V5.60296C7.19687 3.87796 8.92768 2.18362 11.0792 2.02262C13.642 1.82329 15.8031 3.44096 15.8031 5.45729V6.51529" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.66908 13.1626L3.88902 14.5963C4.09939 16.099 4.78789 17.3333 8.63202 17.3333H14.3695C18.2136 17.3333 18.9021 16.099 19.103 14.5963L19.8201 9.99631C20.0783 8.12564 19.409 6.59998 15.3258 6.59998H7.67577C3.59258 6.59998 2.92321 8.12564 3.18139 9.99631" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.8413 9.66663H14.8499" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.14752 9.66663H8.15611" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{
        padding: 8,
        backgroundColor: '#061023',
        borderRadius: 20,
      }}
      onPress={() => dispatch(addItem({item}))}>
      <SvgXml xml={cartIcon} />
    </TouchableOpacity>
  );
};

export default AddToCartButton;
