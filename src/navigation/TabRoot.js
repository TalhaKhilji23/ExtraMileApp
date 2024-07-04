import {View, StyleSheet} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CartScreen from '../screens/main/CartScreen';
import UserProfileRoot from './UserProfileRoot';
import {SvgXml} from 'react-native-svg';
import HomeRoot from './HomeRoot';
import WishlistRoot from './WishlistRoot';
import {useSelector} from 'react-redux';
import CartRoot from './CartRoot';

const Tab = createMaterialBottomTabNavigator();

const TabRoot = () => {
  const homeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0698 2.81997L3.13978 8.36997C2.35978 8.98997 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.98997 20.8598 8.36997L13.9298 2.82997C12.8598 1.96997 11.1298 1.96997 10.0698 2.81997Z" fill="#061023"/>
  <path d="M12 18V15" stroke="#FAFBFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const heartIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.8853 20.8101C12.5453 20.9301 11.9853 20.9301 11.6453 20.8101C8.74532 19.8201 2.26532 15.6901 2.26532 8.6901C2.26532 5.6001 4.75532 3.1001 7.82532 3.1001C9.64532 3.1001 11.2553 3.9801 12.2653 5.3401C13.2753 3.9801 14.8953 3.1001 16.7053 3.1001C19.7753 3.1001 22.2653 5.6001 22.2653 8.6901C22.2653 15.6901 15.7853 19.8201 12.8853 20.8101Z" fill="black" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const cartIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.25 2.25C2.05109 2.25 1.86032 2.32902 1.71967 2.46967C1.57902 2.61032 1.5 2.80109 1.5 3C1.5 3.19891 1.57902 3.38968 1.71967 3.53033C1.86032 3.67098 2.05109 3.75 2.25 3.75H3.636C3.806 3.75 3.954 3.864 3.998 4.028L6.556 13.62C5.75257 13.8293 5.04126 14.2992 4.53349 14.9561C4.02572 15.613 3.75017 16.4197 3.75 17.25C3.75 17.664 4.086 18 4.5 18H20.25C20.4489 18 20.6397 17.921 20.7803 17.7803C20.921 17.6397 21 17.4489 21 17.25C21 17.0511 20.921 16.8603 20.7803 16.7197C20.6397 16.579 20.4489 16.5 20.25 16.5H5.378C5.53313 16.0612 5.82052 15.6813 6.20056 15.4127C6.5806 15.144 7.0346 14.9999 7.5 15H18.718C18.8585 15 18.9962 14.9605 19.1153 14.8861C19.2345 14.8117 19.3304 14.7053 19.392 14.579C20.5337 12.2361 21.5224 9.82171 22.352 7.351C22.3848 7.25326 22.397 7.14981 22.3881 7.04712C22.3791 6.94442 22.349 6.84468 22.2997 6.75413C22.2505 6.66357 22.1831 6.58415 22.1017 6.52081C22.0204 6.45747 21.9269 6.41158 21.827 6.386C16.5528 5.04115 11.122 4.40985 5.68 4.509L5.448 3.642C5.34156 3.24274 5.10621 2.88982 4.77853 2.6381C4.45086 2.38637 4.0492 2.24994 3.636 2.25H2.25ZM3.75 20.25C3.75 19.8522 3.90804 19.4706 4.18934 19.1893C4.47064 18.908 4.85218 18.75 5.25 18.75C5.64782 18.75 6.02936 18.908 6.31066 19.1893C6.59196 19.4706 6.75 19.8522 6.75 20.25C6.75 20.6478 6.59196 21.0294 6.31066 21.3107C6.02936 21.592 5.64782 21.75 5.25 21.75C4.85218 21.75 4.47064 21.592 4.18934 21.3107C3.90804 21.0294 3.75 20.6478 3.75 20.25ZM16.5 20.25C16.5 19.8522 16.658 19.4706 16.9393 19.1893C17.2206 18.908 17.6022 18.75 18 18.75C18.3978 18.75 18.7794 18.908 19.0607 19.1893C19.342 19.4706 19.5 19.8522 19.5 20.25C19.5 20.6478 19.342 21.0294 19.0607 21.3107C18.7794 21.592 18.3978 21.75 18 21.75C17.6022 21.75 17.2206 21.592 16.9393 21.3107C16.658 21.0294 16.5 20.6478 16.5 20.25Z" fill="#061023"/>
  </svg>`;
  const userIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0006 2C14.4506 2 16.4406 3.99 16.4406 6.44C16.4306 8.84 14.5406 10.79 12.1606 10.87Z" fill="#061023" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.15973 14.56C4.73973 16.18 4.73973 18.82 7.15973 20.43C9.90973 22.27 14.4198 22.27 17.1698 20.43C19.5898 18.81 19.5898 16.17 17.1698 14.56C14.4298 12.73 9.91973 12.73 7.15973 14.56Z" fill="#061023" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
  `;
  const unselectedHomeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0698 2.81997L3.13978 8.36997C2.35978 8.98997 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.98997 20.8598 8.36997L13.9298 2.82997C12.8598 1.96997 11.1298 1.96997 10.0698 2.81997Z" fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 18V15" stroke="#FAFBFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const unselectedHeartIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.37 20.8101C13.03 20.9301 12.47 20.9301 12.13 20.8101C9.23 19.8201 2.75 15.6901 2.75 8.6901C2.75 5.6001 5.24 3.1001 8.31 3.1001C10.13 3.1001 11.74 3.9801 12.75 5.3401C13.76 3.9801 15.38 3.1001 17.19 3.1001C20.26 3.1001 22.75 5.6001 22.75 8.6901C22.75 15.6901 16.27 19.8201 13.37 20.8101Z" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const unselectedCartIcon = `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.61334 1H3.73068L4.15414 3M5.84801 11H16.4347L20.6693 3H4.15414M5.84801 11L4.15414 3M5.84801 11L3.42049 13.293C2.75353 13.923 3.22569 15 4.16896 15H16.4347M16.4347 15C15.8731 15 15.3346 15.2107 14.9375 15.5858C14.5404 15.9609 14.3173 16.4696 14.3173 17C14.3173 17.5304 14.5404 18.0391 14.9375 18.4142C15.3346 18.7893 15.8731 19 16.4347 19C16.9962 19 17.5348 18.7893 17.9319 18.4142C18.3289 18.0391 18.552 17.5304 18.552 17C18.552 16.4696 18.3289 15.9609 17.9319 15.5858C17.5348 15.2107 16.9962 15 16.4347 15ZM7.96534 17C7.96534 17.5304 7.74227 18.0391 7.34519 18.4142C6.94811 18.7893 6.40956 19 5.84801 19C5.28646 19 4.74791 18.7893 4.35083 18.4142C3.95375 18.0391 3.73068 17.5304 3.73068 17C3.73068 16.4696 3.95375 15.9609 4.35083 15.5858C4.74791 15.2107 5.28646 15 5.84801 15C6.40956 15 6.94811 15.2107 7.34519 15.5858C7.74227 15.9609 7.96534 16.4696 7.96534 17V17Z" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  const unselectedUserIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.9566 10.87C12.8566 10.86 12.7366 10.86 12.6266 10.87C10.2466 10.79 8.35657 8.84 8.35657 6.44C8.35657 3.99 10.3366 2 12.7966 2C15.2466 2 17.2366 3.99 17.2366 6.44C17.2266 8.84 15.3366 10.79 12.9566 10.87Z" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.95575 14.56C5.53575 16.18 5.53575 18.82 7.95575 20.43C10.7057 22.27 15.2158 22.27 17.9658 20.43C20.3858 18.81 20.3858 16.17 17.9658 14.56C15.2258 12.73 10.7157 12.73 7.95575 14.56Z" stroke="#061023" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const cart = useSelector(state => state.items);
  const getTotalQuantity = () => {
    let total = cart.length;
    return total;
  };
  return (
    <Tab.Navigator
      barStyle={styles.tabStyle}
      labeled={false}
      screenOptions={{
        tabBarBackground: () => (
          <View tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeRoot}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml xml={focused ? homeIcon : unselectedHomeIcon} />
          ),
          tabBarColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name="WishlistTab"
        component={WishlistRoot}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml xml={focused ? heartIcon : unselectedHeartIcon} />
          ),
          tabBarLabel: 'Wishlist',
          tabBarColor: '#ffffff',
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartRoot}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml xml={focused ? cartIcon : unselectedCartIcon} />
          ),
          tabBarLabel: 'Cart',
          tabBarColor: '#ffffff',
          tabBarBadge: getTotalQuantity(),
          tabBarBadgeStyle: {backgroundColor: 'blue'},
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={UserProfileRoot}
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml xml={focused ? userIcon : unselectedUserIcon} />
          ),
          tabBarLabel: 'User',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#ffffff',
  },
});

export default TabRoot;
