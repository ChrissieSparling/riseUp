import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const saved = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(saved || []);
  
  localStorage.setItem('todos', JSON.stringify(todos));

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
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
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className='checkTitle' >Self Care Checklist</h1>
      <h4 className='checkDescription'>Hey there Sunflower! It's time to create your own self care checklist. You can add any task to your list. If you click on your task, it will cross it out and dull it to show its been completed. If you would like to remove the task, simply select the trash icon. To update a task simply select the notepad icon. Go on and self care yourself 😉 </h4>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;