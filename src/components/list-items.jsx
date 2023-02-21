import React, { useState } from "react";
import { FiEdit2, FiCheckCircle } from "react-icons/fi";
import Form from "./form-todo";

export default function ListItems(props) {
  const [edit, setEdit] = useState({
    id: null,
    name: "",
  });
  let list = props.items;

  const confirmEdit = (name) => {
    props.handleEdit(edit.id, name);
    setEdit({
      id: null,
      name: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={confirmEdit} />;
  }

  const allList = list.map((e) => (
    <li
      key={e.id}
      className={e.finished ? "list-object completed" : "list-object"}
    >
      {e.name}
      <div className="icons">
        <FiEdit2
          className="pointer"
          onClick={() => {
            setEdit({ id: e.id, name: e.name });
          }}
        />
        <FiCheckCircle
          className="pointer"
          onClick={() => {
            props.handleComplete(e.id);
          }}
        />
      </div>
    </li>
  ));

  return (
    <div className="list">
      <ul>{allList}</ul>
    </div>
  );
}
