import React, { Component } from "react";
export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control "
            placeholder="Add a Todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button type="submit"> {editItem ? "edit item" : "add item"}</button>
      </form>
    );
  }
}
