import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import InfoScreen from '../screens/InfoScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

const RootStack = createStackNavigator(
  {
  Feedback: FeedbackScreen,
  },
  {
    initialRouteName: 'Feedback',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#b70000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },   
    }
  }
)

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios' ? 'ios-home' : 'md-home'} 
//     />
//   ),
// };

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Team',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-people' : 'md-people'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const InfoStack = createStackNavigator({
  Info: InfoScreen,
})

InfoStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      //Add in ternary operator for android later on
      name={
        Platform.OS === 'ios'
          ? 'ios-map'
          : 'md-map'
      }
    />
  ),
};

const FeedbackStack = createStackNavigator({
  Feedback: FeedbackScreen,
})

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'} 
    />
  ),
};
export default createBottomTabNavigator({
  FeedbackStack,
  LinksStack,
  InfoStack,
  SettingsStack,
});
