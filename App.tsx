/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DestinationDetails, Onboarding} from './screens';
import {COLORS, SIZES, icons} from './constants';
import Tabs from './navigation/tabs';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null as unknown as undefined,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null as unknown as undefined,
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null as unknown as undefined,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.back}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Menu')}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
