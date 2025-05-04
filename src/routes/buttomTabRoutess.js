import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesName} from '../config';
import {AnaSayfa2, AnaSayfa, AnasayfaTeklif, Login1} from '../Screens';
import {Icons} from '../assets';
const Tab = createBottomTabNavigator();
const buttomTabRoutess = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#948D8D', // Pasif ikon rengi
        tabBarStyle: {height: 55}, // Tab bar yüksekliği
      }}>
      <Tab.Screen
        name="AnaSayfa"
        component={AnaSayfa2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: 27, width: 27}}
              source={Icons.home2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoriler"
        component={AnaSayfa2}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: 24, width: 24}}
              source={Icons.like}
            />
          ),
        }}
      />
      <Tab.Screen
        name="VoyageXpert"
        component={AnaSayfa2}
        options={{
          headerShown: false,

          tabBarIcon: ({color, size}) => (
            <Image
              style={{height: 64, width: 64}}
              source={Icons.logo}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Teklifler"
        component={AnasayfaTeklif}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.discount}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kullanıcı"
        component={Login1}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{tintColor: color, height: size, width: size}}
              source={Icons.user}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default buttomTabRoutess;
