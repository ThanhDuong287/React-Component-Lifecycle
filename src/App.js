import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  componentDidUpdate() {
    console.log('App updated');
  }
  render() {
    console.log('App rendered');
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }

}

export default App;
