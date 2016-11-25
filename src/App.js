import React, { Component } from 'react';
import './App.css';

import { TodoForm } from './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List</h2>
          <TodoForm/>
        </div>
      </div>
    );
  }
}

export default App;
