import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ListsContainer from './components/ListsContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ListsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
