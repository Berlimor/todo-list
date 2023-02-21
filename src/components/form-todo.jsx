import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [listItem, setListItem] = useState(props.edit ? props.edit.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: listItem,
      finished: false,
    });

    setListItem("");
  };

  const handleChange = (e) => {
    setListItem(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        id="todo-input"
        placeholder="Add a ToDo"
        autoComplete="off"
        value={listItem}
        onChange={handleChange}
      />
      <button>Add ToDo</button>
    </form>
  );
}
