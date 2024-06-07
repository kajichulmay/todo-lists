import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // console.log('props', props);
  const { submitAdd, submitEdit, isEdit, editTodo } = props;
  const [input, setInput] = useState("");

  useEffect(() => {
    if (isEdit) {
      setInput(editTodo.title);
    }
  }, [isEdit]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmitAdd = e => {
    // e.preventDefault();
    submitAdd(input);
    setInput("");
  };
  const handleSubmitEdit = e => {
    // e.preventDefault();

    submitEdit(input, editTodo.id);
    setInput("");
  };

  return (
    <div className="todo-form">
      {isEdit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input edit"
          />
          <button className="todo-button edit" onClick={handleSubmitEdit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input placeholder="Add a todo" value={input} onChange={handleChange} name="text" className="todo-input" />
          <button className="todo-button" onClick={handleSubmitAdd}>
            Add
          </button>
        </>
      )}
    </div>
  );
}

export default TodoForm;
