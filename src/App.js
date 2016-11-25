import React, { Component } from 'react';
import './App.css';

// components
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            list: [{
              todo: "get milk",
              complete: false
            },{
              todo: "get cheese",
              complete: false
            },{
              todo: "get greek yogurt",
              complete: true
            },{
              todo: "get hot chocolate",
              complete: false
            },{
              todo: "make cake",
              complete: true
            }]
        };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List</h2>
          <TodoForm/>
        </div>
        <div className="App-body">
          <TodoList list={this.state.list}/>
        </div>
      </div>
    );
  }
}

export default App;
