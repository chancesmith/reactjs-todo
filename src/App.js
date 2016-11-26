import React, { Component } from 'react';
import './App.css';

// components
import { TodoList } from './TodoList';

const TodoForm = ({addTodoItem}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <div className="todo-form">
      <input className="add-text" type="text" ref={node => { input = node;}} placeholder="add todo"/>
      <a className="add-btn" onClick={() => { if(input.value !== "")addTodoItem(input.value); input.value = '';}}> <i className="fa fa-plus"></i> </a>
    </div>
  );
};

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

    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  addTodoItem(val){
    // Assemble data
    const todo = {text: val, complete: false}
    // Update data
    this.state.todos.push(todo);
    // Update state
    this.setState({todos: this.state.todos});
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
          <TodoForm addTodoItem={this.addTodoItem}/>
        </div>
        <div className="App-body">
          <TodoList todos={this.state.todos} deleteTodoItem={this.deleteTodoItem} toggleComplete={this.toggleComplete}/>
        </div>
      </div>
    );
  }
}

export default App;
