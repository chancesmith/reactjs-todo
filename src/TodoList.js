import React, { Component } from 'react';
import './TodoList.css';

export class TodoList extends Component {

  render() {
    return (
      <div className="todo-list">
        {this.props.todos.length < 1 &&
	        <p>
	          Celebrate! You have no todos.
	        </p>
	      }
        <ul>
          {this.props.todos.map(function(item, i) {
					  return (
					  	<li key={i} className={(item.complete ? 'is-done' : '')}>
					  		<div className="wrap" onClick={() => this.props.toggleComplete(i)}>
							  	<i className={"fa" + (item.complete ? ' fa-check-square-o' : ' fa-square-o')}></i>
							  	<span className={"fa " + (item.complete ? 'done' : '')}>{item.text}</span>
						  	</div>
						  	<span className="delete" onClick={() => this.props.deleteTodoItem(i)}><i className="fa fa-trash"></i></span>
						  </li>
						);
					}, this)}
        </ul>
      </div>
    );
  }
}