/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import routes from './Routes'
import NavBarRouteMapper from './components/NavBarRouteMapper'
import MainScreen from './components/MainScreen'
import SignInScreen from './components/SignInScreen'

type Props = {};

export default class App extends Component<Props> {
  _renderScene( route, navigator ) {
    switch ( route.name ) {
      case 'SignInScreen':
        return  <SignInScreen />
      case 'MainScreen':
      default:
        return <MainScreen
          getHelpPressed={ ( ) => {
            navigator.push( routes.signIn )
          }}
        />
    }
  }

  render() {
    return (
      <NavigationExperimental.Navigator
        initialRoute={ routes.main }
        renderScene={ this._renderScene }
        style={ styles.container }
        sceneStyle={ styles.sceneContainer }
        navigationBar={ <NavigationExperimental.Navigator.NavigationBar
          routeMapper={ NavBarRouteMapper }
          style={ styles.navBar }
        /> }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: Platform.OS === 'ios' ? 64 : 56,
  },
  navBar: {
    backgroundColor: '#EFEFEF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#494949'
  }
})