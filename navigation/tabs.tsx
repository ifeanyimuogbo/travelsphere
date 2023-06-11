/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../constants';
import {Image} from 'react-native';
import {Home} from '../screens';
import React from 'react';

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...tabOptions,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Hometab':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Bookmark':
              return (
                <Image
                  source={icons.bookmark}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
            case 'Account':
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 30,
                    height: 30,
                  }}
                />
              );
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Hometab" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Bookmark" component={Home} />
      <Tab.Screen name="Account" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
