/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Navigator,
  Text,
  View
} from 'react-native';

class MyScene extends Component {
  _onPressButton() {
    console.log("button tapped");
  }

  render() {
    return (
      <TouchableOpacity style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} onPress={this._onPressButton}>
        <Text>Button</Text>
      </TouchableOpacity>
    );
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default class iostest extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

// Platform specifics
// const styles = StyleSheet.create({
//   height: (Platform.OS === 'ios') ? 200 : 100,
// });

// Platform select

// import { Platform, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'red',
//       },
//       android: {
//         backgroundColor: 'blue',
//       },
//     }),
//   },
// });

AppRegistry.registerComponent('iostest', () => iostest);
