import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import ColumnsContainer from './components/ColumnsContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ColumnsContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
