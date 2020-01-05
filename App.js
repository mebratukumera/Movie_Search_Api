import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import Movies from './assets/movies';
import About from './assets/about';

export class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='movies'
            component={Movies}
            title="Search Movies"
            initial={true} />
          <Scene
            key='about'
            component={About}
            title="Movies Detail"
             />
        </Scene>
      </Router>
    )
  }
}

export default App
