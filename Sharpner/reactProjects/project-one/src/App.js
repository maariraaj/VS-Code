import React, { Component } from 'react';
import ExpenseItem from "./components/ExpenseItem";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Let's get Started</h1>
        <ExpenseItem></ExpenseItem>
      </div>
    );
  }
}

export default App;
