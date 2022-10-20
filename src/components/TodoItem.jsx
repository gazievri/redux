import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const deleteTask = (id) => dispatch(removeTodo({ id }));

  const setTodoComplete = (id) => dispatch(toggleTodoComplete({ id }));

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setTodoComplete(id)}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => deleteTask(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
