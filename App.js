import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Router, Scene} from 'react-native-router-flux'

// You can import from local files
import About from './components/about';
import Home from './components/home';

export default class App extends React.Component {
  render() {
    return (
      <Router>
       <Scene key="root">
         <Scene 
         key="home"
         component={Home}
         title="Search Movie"
         initial={true}
         />
          <Scene 
         key="about"
         component={About}
         title="Detail"
         
         />
       </Scene>
      </Router>
    );
  }
}
