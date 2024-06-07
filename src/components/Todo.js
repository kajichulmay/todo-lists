import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, setIsEdit, isEdit, setEditInput }) => {
  // State to track completion status of todos

  const submitUpdate = value => {
    // updateTodo(edit.id, value);
    // setEdit({
    //   id: null,
    //   value: "",
    // });
  };

  // Function to toggle completion status
  const toggleComplete = id => {
    completeTodo(id);
  };

  // Function to count completed todos
  const countCompletedTodos = () => {
    return todos.filter(todo => todo.isComplete).length;
  };

  const editTodo = todo => {
    setIsEdit(true);
    setEditInput(todo);
  };

  return (
    <div>
      {/* Display count of total and completed todos */}
      {isEdit ? (
        <div style={{ color: "white" }}> Editing......</div>
      ) : (
        <>
          <p style={{ color: "#fff" }}>My Lish: {todos.length}</p>
          <p style={{ color: "#fff" }}>Completed Todos: {countCompletedTodos()}</p>
          {todos?.map((todo, index) => (
            <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
              {/* Checkbox for completion status */}
              <input type="checkbox" checked={todo.isComplete} onChange={() => toggleComplete(todo.id)} />
              <div>{todo.title}</div>
              <div className="icons">
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
                <TiEdit onClick={() => editTodo(todo)} className="edit-icon" />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Todo;
