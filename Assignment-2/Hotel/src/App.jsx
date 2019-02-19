import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import MainPage from './components/MainPage/MastheadContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MainPage/>;
  }
}

export default hot(module)(App);
