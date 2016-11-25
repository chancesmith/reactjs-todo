import React, { Component } from 'react';
import './TodoList.css';

export class TodoList extends Component {

  render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.list.map(function(item, i) {
					  return (
					  	<li key={i}>
						  	<i className={"fa" + (item.complete ? ' fa-check-square-o' : ' fa-square-o')}></i>
						  	<span className={"fa " + (item.complete ? 'done' : '')}>{item.todo}</span>
						  </li>
						);
					}, this)}
        </ul>
      </div>
    );
  }
}