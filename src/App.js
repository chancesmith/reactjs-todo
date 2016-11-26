import React, { Component } from 'react';
import './App.css';

// components
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        todos: [{
          text: "get milk",
          complete: false
        },{
          text: "get cheese",
          complete: false
        },{
          text: "get greek yogurt",
          complete: true
        },{
          text: "get hot chocolate",
          complete: false
        },{
          text: "make cake",
          complete: true
        }]
    };

    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  deleteTodoItem(index){
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    })
  }

  toggleComplete(index){
    var stateCopy = Object.assign({}, this.state);
    stateCopy.todos[index].complete = stateCopy.todos[index].complete ? false : true;
    this.setState(stateCopy);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Todo List</h2>
          <TodoForm/>
        </div>
        <div className="App-body">
          <TodoList todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} toggleComplete={this.toggleComplete}/>
        </div>
      </div>
    );
  }
}

export default App;
