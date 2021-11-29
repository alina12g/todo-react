import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList } = this.props;
    return (
      <ul>
        <h3>Todo list</h3>
        {items.map((item) => {
          return <TodoItem key={item.id} title={item.title} />;
        })}
        <button type="button" onClick={clearList}>
          clear list
        </button>
      </ul>
    );
  }
}
