import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const [isEdit, setIsEdit] = useState(false);

  // State to track completion status of todos
  const [completed, setCompleted] = useState({});

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  // Function to toggle completion status
  const toggleComplete = (id) => {
    setCompleted({
      ...completed,
      [id]: !completed[id],
    });
    completeTodo(id);
  };

  // Function to count completed todos
  const countCompletedTodos = () => {
    return todos.filter((todo) => completed[todo.id]).length;
  };

  // Total number of todos
  const totalTodos = todos.length;

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div>
      {/* Display count of total and completed todos */}
      <p style={{ color: '#fff' }}>My Lish: {totalTodos}</p>
      <p style={{ color: '#fff' }}>Completed Todos: {countCompletedTodos()}</p>
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          {/* Checkbox for completion status */}
          <input
            type="checkbox"
            checked={todo.isComplete || false}
            onChange={() => toggleComplete(todo.id)}
          />
          <div>{todo.text}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit onClick={() => setIsEdit(true)} className="edit-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
