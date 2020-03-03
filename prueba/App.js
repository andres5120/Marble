/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

//import { Provider } from 'react-redux';
import Routers from './src/navigator/router'
import Menu from './src/utils/menu';
import Home from './src/components/home/home';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      states: false,
      hasToken: false,
    }
  }


  render() {
    return (
      <Routers />
    )
  }
};


export default App;
