import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BankAccount from "./BankAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>I'm tired</p>
          <BankAccount bankInfo = {
              [{firstName:"Pelane",accountBalance:100000},
                  {firstName:"Jorden",accountBalance:1}
                  ]}/>
      </div>
    );
  }
}

export default App;
