/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Platform } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';
import Constants from 'expo-constants';

// Screens
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';


export default function Navigation({  }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
        },
        header() {
          return <View style={{paddingTop: Constants.statusBarHeight + 10}}></View>;
        },
        tabBarStyle: {
          height: 62,
          borderRadius: 31,
          marginBottom: Platform.OS === 'ios' ? 30 : 0,
          paddingBottom: 0,
          marginLeft: 10,
          marginRight: 10,
          shadowColor: 'transparent',
          justifyContent: 'space-around',
          backgroundColor: Colors[colorScheme].tabBar,
          ...tabBarWebStyles
        }
      }}
      >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: '',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="bar-chart-o" color={focused ? '#fff' : color} />,
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: '',
          tabBarIcon: ({ color,focused }) => <TabBarIcon name="compass" color={focused ? '#fff' : color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="user" color={focused ? '#fff' : color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginTop: 10 }} {...props} />;
}

const tabBarWebStyles = Platform.select({
  web: {
    width: '1200px',
    alignSelf: 'center',
    marginBottom: 20
  }
})