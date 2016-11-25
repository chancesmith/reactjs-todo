import React, { Component } from 'react';

export class TodoForm extends Component {
  render() {
    return (
      <div className="todo-form">
        <input type="text" placeholder="add todo"/>
      </div>
    );
  }
}