import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState();
  //  [{
  //   id : '1' , title : '' , isComplete : false
  //  }]

  const addTodo = todo => {
    if (todo.trim()) {
      const newItemTodo = { id: uuidv4(), title: todo, isComplete: false };
      const newTodos = [...todos, newItemTodo];
      setTodos(newTodos);
    }
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || !newValue.text.trim()) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const submitEdit = (newTodo, id) => {
    if (newTodo.trim()) {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTodo,
          };
        } else {
          return todo;
        }
      });
      setTodos(updatedTodos);
      setIsEdit(false);
    }
  };
  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm submitAdd={addTodo} submitEdit={submitEdit} isEdit={isEdit} editTodo={editTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        setEditInput={setEditTodo}
      />
    </>
  );
}

export default TodoList;
