import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'sense.json',
    headerStyle: {
      backgroundColor: '#b70000',
  },
  headerTitleStyle: {
      fontWeight: 'bold',
      color: 'white',
  },
  headerLeftContainerStyle: {
      paddingLeft: 15
  },
};

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
