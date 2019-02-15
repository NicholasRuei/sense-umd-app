import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Expo from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Expo.MapView style = {{flex: 1}} provider ={Expo.MapView.PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 38.99,
        longitude: -76.94,
        latitudeDelta: .0922,
        longitudeDelta: .0421,
      }} />
    );
  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
