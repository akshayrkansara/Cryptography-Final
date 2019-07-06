import React, { Component } from 'react';
import Shift from './Shift';
import Caesar from './Caesar';
import BruteForce from './BruteForce';
import Monoalphabetic from './Monoalphabetic'
import Vigenere from './Vigenere';

class App extends Component {

  render() {
   return (
      <div>
        <Caesar />
        <Shift />
        <Monoalphabetic />
        <Vigenere />
        <BruteForce />
      </div>           
      )
  }
}

export default App;