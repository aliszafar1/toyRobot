import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ToyRobot from './containers/toyRobot';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ToyRobot />
      </Provider>
    )
  }
}