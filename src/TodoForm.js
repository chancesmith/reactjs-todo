import React, { Component } from 'react';

export class TodoForm extends Component {
  handleCreate(event){
    event.preventDefault();

    this.props.addTodoItem(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input className="add-text" type="text" ref="createInput" placeholder="add todo"/>
        <a className="add-btn" onClick={this.handleCreate.bind(this)}> <i className="fa fa-plus"></i> </a>
      </form>
    );
  }
}