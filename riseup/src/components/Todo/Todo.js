import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import './Todo.css'

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}
          onClick={() => removeTodo(todo.id)}
        /> 
        <FontAwesomeIcon className='edit-icon' icon={faPenToSquare}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          
        />
      </div>
    </div>
  ));
};

export default Todo;