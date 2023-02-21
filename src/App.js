import "./App.css";
import { useState } from "react";

import ListItems from "./components/list-items";
import Form from "./components/form-todo";

export default function App() {
  const [allItems, setAllItems] = useState([]);

  const addToDo = (item) => {
    if (!item.name) {
      return;
    }

    const newList = [...allItems, item];

    setAllItems(newList);
  };

  const handleComplete = (id) => {
    let newTodoList = allItems.map((item) => {
      if (item.id === id) {
        item.finished = !item.finished;
      }
      return item;
    });
    setAllItems(newTodoList);
  };

  const handleEdit = (id, newName) => {
    if (!newName) {
      return;
    }

    setAllItems((prev) =>
      prev.map((item) => (item.id === id ? newName : item))
    );
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>

      <Form onSubmit={addToDo} />
      <ListItems
        items={allItems}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    </div>
  );
}
